pragma solidity 0.7.3;

contract users {

    mapping(int32 => address) public registry;

    event LogStudentRegistered(address claimant, int32 studentid);

    function userExists(int32 studentid) public view returns(bool doesIndeed) {
        return(registry[studentid] != address(0));
    }

    function recordExistance(int32 studentid) public {
        require(!userExists(studentid));
        registry[studentid] = msg.sender;
        emit LogStudentRegistered(msg.sender, studentid);
    }

    function getAddressFromID(int32 studentid) public view returns (address) {
        require(userExists(studentid));
        return registry[studentid];
    }
}