require('dotenv').config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../../artifacts/contracts/users.sol/users.json"); // for Hardhat
const contractAddress = "0xF57Dd24ac0150464494D5a162eb7227d9812726B";
const usersContract = new web3.eth.Contract(contract.abi, contractAddress);


// Takes in a student ID and fetches the address of the students wallet. 
async function addStudent(studentid, address) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); // get latest nonce
    const gasEstimate = await usersContract.methods.recordExistance(studentid, address).estimateGas(); // estimate ga
    // Create the transaction
    const tx = {
      'from': PUBLIC_KEY,
      'to': contractAddress,
      'nonce': nonce,
      'gas': 60000,
    //   'gasLimit' : hexlify(100000), 
    //   'gasAmount' : 100000,
      'data': usersContract.methods.recordExistance(studentid, address).encodeABI()
    };
    // Sign the transaction
    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    signPromise.then((signedTx) => {
      web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
        if (!err) {
          console.log("The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
        } else {
          console.log("Something went wrong when submitting your transaction:", err)
        }
      });
    }).catch((err) => {
      console.log("Promise failed:", err);
    });
}

export default async function (req, res) {
    if (req.method === "POST") {
        try{
            const studentid = req.body.studentid;
            const walletid = req.body.walletid;
            await addStudent(studentid, walletid);
            res.status(200).send("Success");
        } catch(err){
            res.status(500).send("Already existed");
        }
    }
}
