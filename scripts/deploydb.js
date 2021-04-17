async function main() {
    const Users = await ethers.getContractFactory("users");
    
    // Start deployment, returning a promise that resolves to a contract object
    const users = await Users.deploy();
    console.log("Contract deployed to address:", users.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });