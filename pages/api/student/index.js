require("dotenv").config();
// Imports and environment variables
const API_URL = process.env.API_URL;
const USERS_ADDRESS = process.env.USERS_ADDRESS;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// Users Contract ABI and Alchemy Web3 Instantiation 
const web3 = createAlchemyWeb3(API_URL);
const contract = require("../../../artifacts/contracts/users.sol/users.json"); // for Hardhat
const usersContract = new web3.eth.Contract(contract.abi, USERS_ADDRESS);

require("ethers")
// NOT WORKING CURRENTLY!


// This API endpoint takes a wallet address and returns the Student ID associated with the wallet address. 
export default async function (req, res) {
    const { walletaddress } = req.query
    console.log("API Call to the API/students endpoint, ", walletaddress);
    // const events = await usersContract.getPastEvents("allEvents",{})
    // console.log(events);
    try{
        const events = await usersContract.getPastEvents('LogStudentRegistered', {
            fromBlock: 0,
            toBlock: 'latest'
        })
        // console.log(events);
        events.forEach(function(value){
            console.log(value.returnValues);
          });
        res.send(200);
    }catch (error) {
        console.log("An error occurred while fetching events")
        res.send(404).send("No events founds")
    }
    // try{
    //     const address = await usersContract.methods.getAddressFromID("833684").call();
    //     // console.log("The wallet address, ", address,  is compiled nfts")
    //     res.status(200).send(address);
    // }
    // catch (error){
    //     console.log("An error occurred look up of the wallet address. This wallet address has not been associated with a student ID.");
    //     console.log(error);
    //     res.status(404).send("Fail");
    // }
}
