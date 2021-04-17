require('dotenv').config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const { SystemUpdate } = require('@material-ui/icons');
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/users.sol/users.json"); // for Hardhat
const contractAddress = "0xDF0c4587D5071D9B1d749a8F357C94106a96505b";
const usersContract = new web3.eth.Contract(contract.abi, contractAddress);

// Takes in a student ID and fetches the address of the students wallet. 
async function addStudent(studentid) {
    return new Promise(async (resolve, reject) => {
      const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce
      const gasEstimate = await usersContract.methods.recordExistance(studentid).estimateGas();
      //the transaction
      const tx = {
        from: PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,
        gasPrice: gasEstimate,
        gasLimit: 1000000,
        data: usersContract.methods.recordExistance(studentid).encodeABI(),
      };

    //   Sign the transaction
      const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  
      signPromise
        .then((signedTx) => {
          web3.eth.sendSignedTransaction(signedTx.rawTransaction, function (err, hash) {
            if (!err) {
              console.log(
                "The hash of your transaction is: ",
                hash,
                "\nCheck Alchemy's Mempool to view the status of your transaction!"
              );
              resolve(hash);
            } else {
              console.log(
                "Something went wrong when submitting your transaction:",
                err
              );
              reject();
            }
          });
        })
        .catch((err) => {
          console.log(" Promise failed:", err);
          reject();
        });
    });
  }



// async function main() {
//     try{
//         await usersContract.methods.recordExistance(833684).send();
//         const res = await usersContract.methods.getAddressFromID(833684).call();
//         console.log("The result is ", res);
//         return res;
//     } catch (err) {
//         console.log("Error: ", err)
//         return null;
//     }
// }

// // console.log(JSON.stringify(contract.abi));

// const address = main();
// console.log(address);
// if (address == null) {
//     console.log("Not in the database")
// }
// else{
//     console.log("In the database")
// }

async function main() {
    // const res = await usersContract.methods.getAddressFromID(833684).call();
    await addStudent(883684);
}

main();