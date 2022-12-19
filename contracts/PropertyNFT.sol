//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Import Statements
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// Custom Errors
error PropertyNFT__NotEnoughETHToMint();
error PropertyNFT__TransferFailed();

contract PropertyNFT is ERC721URIStorage, Ownable {
    // Counters to keep track of TokenID
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // State Variables //
    address private immutable i_blockEstateContractAddress;
    uint256 private immutable i_mintFee;

    // Events //
    event PropertyMinted(uint256 tokenId, address owner);

    // constructor //
    constructor(
        address _blockEstateAddress,
        uint256 _mintFee
    ) ERC721("Block Estate Tokens", "BET") {
        i_blockEstateContractAddress = _blockEstateAddress;
        i_mintFee = _mintFee;
        // give BlockEstate the permission to mint PropertyNFT
        setApprovalForAll(i_blockEstateContractAddress, true);
    }

    function mintProperty(
        string memory tokenURI,
        address propertyOwner
    ) public payable returns (uint256) {
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

    function withdraw() public onlyOwner {
        uint256 amount = address(this).balance;
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        if (!success) {
            revert PropertyNFT__TransferFailed();
        }
    }

    function getMintFee() public view returns (uint256) {
        return i_mintFee;
    }

    function getTokenCounter() public view returns (uint256) {
        return _tokenIds.current();
    }
}
