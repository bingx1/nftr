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

// export default async function (req, res) {
//     const { tokenid } = req.query
//     console.log(tokenid);
//     const nfts = await fetch_json(address);
//     res.status(200).send(nfts);
// }
