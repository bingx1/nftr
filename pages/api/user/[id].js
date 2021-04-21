require("dotenv").config();
// Imports and environment variables
const API_URL = process.env.API_URL;
const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS;
const axios = require('axios');
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// Token Contract ABI and Alchemy Web3 Instantiation 
const contract = require("../../../artifacts/contracts/MyNFT.sol/MyNFT.json");
const web3 = createAlchemyWeb3(API_URL);
const nftContract = new web3.eth.Contract(contract.abi, TOKEN_ADDRESS);



// This API endpoint fetches all the NFTs associated with a particular wallet address
export default async function (req, res) {
    const { id } = req.query
    console.log("API Call to the users/<sid> endpoint, ", id);
    try {
        const nfts = await fetch_json(id);
        console.log("Successfully compiled nfts")
        console.log(nfts)
        res.status(200).json(nfts);
    } catch (err){
        console.log("An error occurred in finding this wallets NFTS. Either the user has no NFTs or the NFTs are incorrectly formatted.");
        console.log("Error: ", err);
        res.status(404);
    }
}

// Function to fetch all NFTs owned by a particular wallet. Returns a JSON of the format {list:{nft1,nft2,etc.}}
async function fetch_json(address){
    const balances = await web3.alchemy.getTokenBalances(address, [TOKEN_ADDRESS]);
    console.log(balances)
    const balance = balances.tokenBalances[0].tokenBalance;
    console.log(balance)
    // const metadata = await web3.alchemy.getTokenMetadata(contractAddress); // Not useful as the test token MyNFT has no metadata.
    var items = []
    for(var i = 0; i < balance; i++) {
        const id = await nftContract.methods.tokenOfOwnerByIndex(address, i).call();
        const uri = await nftContract.methods.tokenURI(id).call();
        const json = await getJSON(uri);
        items.push(json);
      }
    return {"list": items};    
}

// Function to get the metadata contained at the NFT's URI.
const getJSON = (uri) => {
    console.log(uri);
    return axios.get(uri)
        .then(function (json) {
            console.log("Successfully retrived the json from the URI");
            console.log(json.data);
            return json.data;
        })
        .catch(function (error) {
            console.log("An error occured while retreiving the json", error);
        });
};