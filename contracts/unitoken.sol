//Contract based on https://docs.openzeppelin.com/contracts/3.x/erc721
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721Enumerable.sol"
import "@openzeppelin/contracts/token/ERC721/ERC721Metadata.sol"
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract unitoken is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping (address => bool) public clubs;

    event newTokenMinted(address recipient, string tokenURI, address club);

    event logClubRegistered(address club, string name);

    constructor() public ERC721("uniToken", "NFTR") {
        address msgSender = _msgSender();
        clubs[msgSender] = true;
    }

    modifier clubOnly() {
        require(clubs[msg.sender]);
        _;
    }

    function mintNFT(address recipient, string memory tokenURI) public clubOnly returns (uint256)
    {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _safeMint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        emit newTokenMinted(recipient, tokenURI, msg.sender);
        return newItemId;
    }

    function setClub(address club, string name, bool state) public ownerOnly {
        clubs[club] = state;
        emit logClubRegistered(club, name);
    }
}