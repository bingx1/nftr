require("dotenv").config();
// Imports and environment variables
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// Contract ABI and 
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const contractAddress = "0x2eb1cd1fdcbadc3ccf3f67e1283bafd888b1e7b5";



const web3 = createAlchemyWeb3(API_URL);
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

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
            return `The hash of your transaction is: ${hash} \nCheck Alchemy's Mempool to view the status of your transaction!`
          } else {
            console.log("Something went wrong when submitting your transaction:",err);
            return `Something went wrong when submitting your transaction: ${err}`
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    });
}

mintNFT(
  "https://gateway.pinata.cloud/ipfs/QmXs529ewuVgwu6FrhGjYjfFPbZcgjoW7pJcSnLELrpuNN"
);

