require("dotenv").config();
// Imports and environment variables
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PINATA_PUBLIC_KEY = process.env.PINATA_PUBLIC_KEY;
const PINATA_SECRET_KEY = process.env.PINATA_SECRET_KEY;
const axios = require('axios');
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// Contract ABI and 
const contract = require("../../../artifacts/contracts/MyNFT.sol/MyNFT.json");
const contractAddress = "0x2eb1cd1fdcbadc3ccf3f67e1283bafd888b1e7b5";
const web3 = createAlchemyWeb3(API_URL);
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

const contract2 = require("../../../artifacts/contracts/users.sol/users.json"); // for Hardhat
const contractAddress2 = "0xF57Dd24ac0150464494D5a162eb7227d9812726B";
const usersContract = new web3.eth.Contract(contract2.abi, contractAddress2);

// // Responds to student 
export default async function (req, res) {
    const { id } = req.query
    console.log("API Call to the users/<sid> endpoint, ", id);
    const address = await usersContract.methods.getAddressFromID(id).call();
    // console.log(address);
    const nfts = await fetch_json(address);
    console.log("Successfully compiled nfts")
    console.log(nfts)
    res.status(200).json(nfts);
}


async function fetch_json(address){
    const balances = await web3.alchemy.getTokenBalances(address, [contractAddress]);
    console.log(balances)
    const balance = balances.tokenBalances[0].tokenBalance;
    console.log(balance)
    const metadata = await web3.alchemy.getTokenMetadata(contractAddress);
    // console.log(metadata);
    var items = []
    for(var i = 0; i < balance; i++) {
        const id = await nftContract.methods.tokenOfOwnerByIndex(address, i).call();
        const uri = await nftContract.methods.tokenURI(id).call();
        const json = await getJSON(uri);
        // console.log(json);
        items.push(json);
      }
    return {"list": items};    
}


const getJSON = (uri) => {
    console.log(uri);
    return axios.get(uri)
        .then(function (json) {
            console.log("Successfully retrived the json from the URI");
            console.log(json.data);
            return json.data;
            //handle response here
        })
        .catch(function (error) {
            console.log("An error occured while retreiving the json", error);
            //handle error here
        });
};


// main();