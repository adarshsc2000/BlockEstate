//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Import Statements
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// Custom Errors
error PropertyNFT__NotEnoughETHToMint();
error PropertyNFT__TransferFailed();
error PropertyNFT__UserIsNotSlrb();

/** @title A ERC721 Token that represents a property asset
    @dev A ERC721 based Contract that can mint and burn custom metadata NFTs
*/ 
contract PropertyNFT is ERC721URIStorage, Ownable {
    // Counters to keep track of TokenID
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // State Variables //
    uint256 private immutable i_mintFee;
    address private immutable i_slrb;

    // Events //
    event PropertyMinted(uint256 tokenId, address owner);
    event PropertyExpired(uint256 tokenId);

    // Modifiers //
    modifier onlySlrb() {
        if (msg.sender != i_slrb) {
            revert PropertyNFT__UserIsNotSlrb();
        }
        _;
    }

    // constructor //
    constructor(
        uint256 _mintFee,
        address _slrb
    ) ERC721("BlockEstate NFTs", "BEN") {
        i_mintFee = _mintFee;
        i_slrb = _slrb;
    }

    // Main Functions //
    /**
     * @dev Method for minting Property NFT
     * @notice Mintfee is colled for minting Property NFT
     * @param tokenURI TokenURI of Property NFT
     * @param propertyOwner The Address of the owner who owns the Property asset
     */
    function mintPropertyNFT(
        string memory tokenURI,
        address propertyOwner
    ) public payable onlySlrb returns (uint256) {
        if (msg.value < i_mintFee) {
            revert PropertyNFT__NotEnoughETHToMint();
        }
        _tokenIds.increment();
        uint256 latestPropertyID = _tokenIds.current();
        _mint(propertyOwner, latestPropertyID);
        _setTokenURI(latestPropertyID, tokenURI);
        emit PropertyMinted(latestPropertyID, propertyOwner);
        return latestPropertyID;
    }

    /**
     * @dev Method for burning the old Property NFT during the transfer of ownership
     * @param _tokenId The old token ID of the Property NFT thats going to be burnt
     */
    function expirePropertyNFT(uint256 _tokenId) public onlySlrb {
        _burn(_tokenId);
        emit PropertyExpired(_tokenId);
    }

    /**
     * @dev Method to withdraw funds that was collected during the minting process.
     * @notice This can only be invoked by the owner
     */
    function withdraw() public onlyOwner {
        uint256 amount = address(this).balance;
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        if (!success) {
            revert PropertyNFT__TransferFailed();
        }
    }

    /**
     * @dev Method to get the fees charged for minting Property NFT.
     */
    function getMintFee() public view returns (uint256) {
        return i_mintFee;
    }

    /**
     * @dev Method to get the current TokenID of the Property NFT.
     */
    function getTokenCounter() public view returns (uint256) {
        return _tokenIds.current();
    }

    /**
     * @dev Method to reset the TokenID to 0.
     * @notice Method can only be called by the owner
     * @notice Will be only used for testing and in default scripts
     */
    function resetCounter() public onlyOwner {
        _tokenIds.reset();
    }
}
