require("dotenv").config();
// Imports and environment variables
const PINATA_PUBLIC_KEY = process.env.PINATA_PUBLIC_KEY;
const PINATA_SECRET_KEY = process.env.PINATA_SECRET_KEY;
const axios = require('axios');

// The api/uri endpoint accepts POST requests with a JSON body, where the JSON body describes the metadata of the NFT.
// Returns the IPFS URL to the URI containing the NFT's metadata.
export default async function (req, res) {
    if (req.method === "POST") {
        try{
            const url_body = "https://gateway.pinata.cloud/ipfs/";
            const hashcode = await pinJSONToIPFS(PINATA_PUBLIC_KEY, PINATA_SECRET_KEY, req.body);
            const ipfs_url = url_body + hashcode;
            console.log(ipfs_url);
            res.status(200).send(ipfs_url);
        }
        catch (error){
            console.log("An error occurred when pinning the JSON to IPFS", error);
            res.status(404).send("Something whent wrong while pinning the JSON to the IPFS.");
        }

    }
    else {
        res.status(404).send("This endpoint only accepts POST requests");
    }
  }
  
const pinJSONToIPFS = (pinataApiKey, pinataSecretApiKey, JSONBody) => {
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
            console.log("Sucessfully pinned the JSON to the IPFS", hash.data.IpfsHash);
            console.log(hash.data)
            return hash.data.IpfsHash;
            //handle response here
        })
        .catch(function (error) {
            console.log("An error occured while pinning", error);
            //handle error here
        });
};
