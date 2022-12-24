// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Import Statements
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./PropertyNFT.sol";

// Custom Errors
error BlockEstate__PropertyAlreadyForSale(uint256 tokenId);
error BlockEstate__PropertyNotOnSale(uint256 tokenId);
error BlockEstate__UserIsNotAdmin();
error BlockEstate__UserIsNotNotary();
error BlockEstate__UserIsNotSlrb();
error BlockEstate__NotOwner();
error BlockEstate__ETHMustBeMoreThanZero();
error BlockEstate__InvalidNFTForBlockEstate();
error BlockEstate__NoInterestOnPropertyYet(uint256 tokenId);
error BlockEstate__PropertyAlreadyVerified(uint256 tokenId);
error BlockEstate__UserIsNotTheInterestedBuyer();
error BlockEstate__NotEnoughETH(uint256 tokenId, uint256 price);
error BlockEstate__NoETHToWithdraw();
error BlockEstate__ETHTransferFailed();

contract BlockEstate is ReentrancyGuard {
    enum Status {
        LISTED,
        INTERESTED,
        VERIFIED,
        TRANSFERRING,
        CANCELLED
    }

    // Type Declarations //
    struct Listing {
        address seller;
        address buyer;
        uint256 price;
        Status status;
    }

    // Events //
    event PropertyListed(
        address indexed seller,
        uint256 indexed tokenId,
        uint256 price
    );

    event PropertyCanceled(address indexed seller, uint256 indexed tokenId);

    event PropertyInterested(address indexed buyer, uint256 indexed tokenId);

    event PropertyVerified(uint256 tokenId);

    event PropertyTransaction(
        address indexed buyer,
        uint256 indexed tokenId,
        uint256 price
    );

    event PropertyOwnershipTransfer(uint256 oldTokenId, uint256 newTokenId);

    // State Variables //
    PropertyNFT private immutable i_propertyNFT; 
    address private immutable i_admin;
    address private immutable i_notary;
    address private immutable i_slrb;
    mapping(uint256 => Listing) private s_listings;
    mapping(address => uint256) private s_proceeds;

    // Modifiers //
    modifier notOnSale(uint256 tokenId) {
        Listing memory listing = s_listings[tokenId];
        if (listing.price > 0) {
            revert BlockEstate__PropertyAlreadyForSale(tokenId);
        }
        _;
    }

    modifier onSale(uint256 tokenId) {
        Listing memory listing = s_listings[tokenId];
        if (listing.status > Status.LISTED) {
            revert BlockEstate__PropertyNotOnSale(tokenId);
        }
        _;
    }

    modifier onlyAdmin() {
        if (msg.sender != i_admin) {
            revert BlockEstate__UserIsNotAdmin();
        }
        _;
    }

    modifier onlyNotary() {
        if (msg.sender != i_notary) {
            revert BlockEstate__UserIsNotNotary();
        }
        _;
    }

    modifier onlySlrb() {
        if (msg.sender != i_slrb) {
            revert BlockEstate__UserIsNotSlrb();
        }
        _;
    }

    modifier isOwner(uint256 tokenId, address buyer) {
        address owner = i_propertyNFT.ownerOf(tokenId);
        if (buyer != owner) {
            revert BlockEstate__NotOwner();
        }
        _;
    }

    // Constructor //
    constructor( address _propertyNFTAddress, address _notary, address _slrb) {
        i_propertyNFT = PropertyNFT(_propertyNFTAddress);
        i_admin = msg.sender;
        i_notary = _notary;
        i_slrb = _slrb;
    }

    // Main Functions //
    /**
     * @dev Method for Listing property on sale
     * @param tokenId Token ID of Property NFT
     * @param price sale price (in ETH) for each property
     */
    function sellProperty(
        uint256 tokenId,
        uint256 price
    ) external notOnSale(tokenId) isOwner(tokenId, msg.sender) {
        if (price <= 0) {
            revert BlockEstate__ETHMustBeMoreThanZero();
        }
        s_listings[tokenId] = Listing(
            msg.sender,
            address(0),
            price,
            Status.LISTED
        );
        emit PropertyListed(msg.sender, tokenId, price);
    }

    /**
     * @dev Method for cancelling the property sale
     * @notice Property sale cannot be cancelled if the notary completed the verification process
     * @param tokenId Token ID of the Property NFT
     */
    function cancelPropertySale(
        uint256 tokenId
    ) external isOwner(tokenId, msg.sender) onSale(tokenId) {
        delete (s_listings[tokenId]);
        emit PropertyCanceled(msg.sender, tokenId);
    }

    /**
     * @dev Method to show that the user is interested to buy the property
     * @param tokenId Token ID of Property NFT
     */
    function propertyInterested(uint256 tokenId) external onSale(tokenId) {
        s_listings[tokenId].status = Status.INTERESTED;
        s_listings[tokenId].buyer = msg.sender;
        emit PropertyInterested(msg.sender, tokenId);
    }

    /**
     * @dev Method for verifying the details of the property by the notary
     * @param tokenId Token ID of Property NFT
     */
    function propertyVerified(uint256 tokenId) external onlyNotary {
        Listing memory property = s_listings[tokenId];
        if (property.status == Status.LISTED) {
            revert BlockEstate__NoInterestOnPropertyYet(tokenId); 
        } else if (property.status > Status.INTERESTED) {
            revert BlockEstate__PropertyAlreadyVerified(tokenId); 
        }
        s_listings[tokenId].status = Status.VERIFIED;
        emit PropertyVerified(tokenId);
    }

    /**
     * @dev Method for the buyer to pay the amount of the property to the old owner
     * @param tokenId Token ID of Property NFT
     */
    function payPropertySaleAmount(
        uint256 tokenId
    ) external payable nonReentrant {
        Listing memory listedProperty = s_listings[tokenId];
        if (msg.sender != listedProperty.buyer) {
            revert BlockEstate__UserIsNotTheInterestedBuyer();
        }
        if (msg.value < listedProperty.price) {
            revert BlockEstate__NotEnoughETH(tokenId, listedProperty.price);
        }
        s_proceeds[listedProperty.seller] += msg.value;
        s_listings[tokenId].status = Status.TRANSFERRING;
        emit PropertyTransaction(msg.sender, tokenId, listedProperty.price);
    }

    /**
     * @dev Method for transferring the ownership of the Property
     * @param oldTokenId Old Token ID of Property NFT
     * @param tokenURI for minting a new Property NFT
     */
    function transferOwnership(
        uint256 oldTokenId,
        string memory tokenURI
    ) external onlySlrb returns (uint256) {
        Listing memory oldProperty = s_listings[oldTokenId];
        uint256 newTokenId = i_propertyNFT.mintPropertyNFT(
            tokenURI,
            oldProperty.buyer
        );
        i_propertyNFT.expirePropertyNFT(oldTokenId);
        delete (s_listings[oldTokenId]);
        emit PropertyOwnershipTransfer(oldTokenId, newTokenId);
        return newTokenId;
    }

    /**
     * @dev Method for withdrawing ETH from the sales
     */
    function withdrawProceeds() external {
        uint256 proceeds = s_proceeds[msg.sender];
        if (proceeds <= 0) {
            revert BlockEstate__NoETHToWithdraw();
        }
        s_proceeds[msg.sender] = 0;
        (bool success, ) = payable(msg.sender).call{value: proceeds}("");
        if (!success) {
            revert BlockEstate__ETHTransferFailed();
        }
    }

    /**
     * @dev Method to check if its a regular user that wants to buy / sell / view properties
     */
    function isRegularUser() public view returns (bool) {
        address user = msg.sender;
        return (user != i_admin && user != i_notary && user != i_slrb);
    }

    /**
     * @dev Method to check if the user is the admin
     */
    function isAdmin() public view returns (bool) {
        return (msg.sender == i_admin);
    }

    /**
     * @dev Method to check if the user is the admin
     */
    function isNotary() public view returns (bool) {
        return (msg.sender == i_notary);
    }

    /**
     * @dev Method to check if the user is the admin
     */
    function isSlrb() public view returns (bool) {
        return (msg.sender == i_slrb);
    }

    // Getter Functions //
    function getListedProperty(
        uint256 tokenId
    ) external view returns (Listing memory) {
        return s_listings[tokenId];
    }

    function getProceeds(address seller) external view returns (uint256) {
        return s_proceeds[seller];
    }
}
