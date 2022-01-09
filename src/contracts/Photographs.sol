pragma solidity ^0.8;

import "../../node_modules/@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";

// TODO: Photographs -> intended ERC-1155 name
// TODO: Provide baseTokenURI
contract Photographs is ERC1155PresetMinterPauser {
    constructor() ERC1155PresetMinterPauser("") {}
}