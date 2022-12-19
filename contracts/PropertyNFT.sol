//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Import Statements
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PropertyNFT is ERC721URIStorage {
    // Counters to keep track of TokenID
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // State Variables //
    address private immutable i_blockEstateContractAddress;

    // constructor //
    constructor(
        address blockEstateAddress
    ) ERC721("Block Estate Tokens", "BET") {
        i_blockEstateContractAddress = blockEstateAddress;
    }

    function mintProperty(string memory tokenURI, address owner) public returns (uint256) {
        
        _tokenIds.increment();
        uint256 latestPropertyID = _tokenIds.current();
        _mint(owner, latestPropertyID);
        _setTokenURI(latestPropertyID, tokenURI);
        // give BlockEstate the permission to mint PropertyNFT
        setApprovalForAll(i_blockEstateContractAddress, true);
        return latestPropertyID;
    }
}
