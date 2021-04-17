pragma solidity 0.7.3;

contract users {

    mapping(int32 => address) public registry;

    event LogStudentRegistered(address claimant, int32 studentid);

    function userExists(int32 studentid) public view returns(bool doesIndeed) {
        return(registry[studentid] != address(0));
    }

    function recordExistance(int32 studentid, address sender) public {
        require(!userExists(studentid), "error already exists");
        registry[studentid] = sender;
        emit LogStudentRegistered(sender, studentid);
    }

    function getAddressFromID(int32 studentid) public view returns (address) {
        require(userExists(studentid));
        return registry[studentid];
    }
}