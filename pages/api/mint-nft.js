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
const contract = require("../../artifacts/contracts/MyNFT.sol/MyNFT.json");
const contractAddress = "0x2eb1cd1fdcbadc3ccf3f67e1283bafd888b1e7b5";
const web3 = createAlchemyWeb3(API_URL);
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);


export default async function (req, res) {
    if (req.method === 'POST') {
        const url_body = "https://gateway.pinata.cloud/ipfs/"
        const hashcode = await pinJSONToIPFS(PINATA_PUBLIC_KEY, PINATA_SECRET_KEY, req.body);
        const ipfs_url = url_body + hashcode
        // const url = "https://gateway.pinata.cloud/ipfs/QmXs529ewuVgwu6FrhGjYjfFPbZcgjoW7pJcSnLELrpuNN";
        // await res.status(200).send("hello world")
        const result = await mintNFT(ipfs_url)
        res.status(200).send(result)
    }
}
  
async function mintNFT(tokenURI) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce

  //the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log("The hash of your transaction is: ", hash, "\nCheck Alchemy's Mempool to view the status of your transaction!");
          } else {
            console.log("Something went wrong when submitting your transaction:",err);
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    }); 
}

var pinJSONToIPFS = (pinataApiKey, pinataSecretApiKey, JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    console.log(pinataApiKey, pinataSecretApiKey, JSONBody);
    return axios
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretApiKey
            }
        })
        .then(function (hash, pin, time) {
            console.log("Json pinning was succesful");
            console.log(hash.data)
            return hash.IpfsHash;
            //handle response here
        })
        .catch(function (error) {
            console.log("An error occured while pinning", error);
            //handle error here
        });
};