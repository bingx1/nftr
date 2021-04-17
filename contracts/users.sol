pragma solidity 0.7.3;

contract ProofOfExistance {

    mapping(bytes32 => address) public registry;

    event LogDocumentRegistered(address claimant, bytes32 document);

    function userExists(bytes32 userHash) public view returns(bool doesIndeed) {
        return(registry[userHash] != address(0));
    }

    function recordExistance(bytes32 userHash) public {
        require(!userExists(userHash));
        registry[userHash] = msg.sender;
        emit LogDocumentRegistered(msg.sender, userHash);
    }

}