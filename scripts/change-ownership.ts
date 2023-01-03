import { ethers, network, getNamedAccounts } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";
const { storeNFTs } = require("../utils/uploadToNftStorage");

const TOKEN_IDS = [5, 6]

async function changeOwnership() {
    const { slrb } = await getNamedAccounts();
    const blockEstate = await ethers.getContract("BlockEstate", slrb);
    const propertyNFT = await ethers.getContract("PropertyNFT", slrb);
    for (const tokenId of TOKEN_IDS) {
        const oldTokenURI = await propertyNFT.tokenURI(tokenId);
        console.log(oldTokenURI);
        const tx = await blockEstate.transferOwnership(tokenId, oldTokenURI);
        await tx.wait(1);
        console.log(`Changed ownership. New tokenURI = ${tx}`);
        if ((network.config.chainId == 31337)) {
            await moveBlocks(2, 1000);
        }
    }
}

changeOwnership()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
