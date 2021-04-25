# NFTr
A platform for University Clubs to issue NFTs. These may be Acheievments, Awards or Roles - anything.
## Used:
React.js, Next.js, Web3, Ethers.io, Alchemy API, Pinata API, Etherscan API
## To-do
1. Write a better contract for the Base NFT 
    - **Requirements:**
    - Include a way to store which address gave the command to mint the NFT at run time
    - Give the NFT proper metadata (not the URI-based metadata)

2. Implement pre-rendering of pages via Next.js
3. Fix rendering of profile page to be dynamic instead of hard-coded
4. Use Ethers or Web3 API to list events emitted by the Users contract to show a list of users that have associated their wallet addresses with their Student IDs.
5. Explore how ENS names can be integrated into the app
6. Migrate all blockchain interaction to either Web3Alchemy or Ethers.io for consistency
7. Use metamask hook provided data in filling of forms, displaying profiles, etc.
8. Use metamask so that the User is signing their own transaction instead of using Bing's API key
    - This is probably going to involve moving the logic to the client-side as opposed to via an API call
    - https://ethereum.stackexchange.com/questions/77028/sending-an-ethereum-transaction-with-ethers-js-and-metamask
    - https://github.com/ethers-io/ethers.js/issues/308

## New architecture
- All calls to the blockchain should be done clientside. No need to interact with the Apps' API - do it directly using the injected Web3 provider.
- Viewing the NFTs can be done client-side, Minting NFTs can be done client-side, etc.
- Only thing that really needs to happen using our API is to connect to the Pinata API