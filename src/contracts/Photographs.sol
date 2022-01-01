pragma solidity ^0.8;

import "../../node_modules/@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

// TODO: Photographs -> intended ERC-721 name
// TODO: Provide baseTokenURI
contract Photographs is ERC721PresetMinterPauserAutoId {
    constructor() ERC721PresetMinterPauserAutoId("Photographs", "PTG", "") {}
}