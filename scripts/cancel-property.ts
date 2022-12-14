import { ethers, network } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";

const TOKEN_ID = 0;

async function cancelProperty() {
    const blockEstate = await ethers.getContract("BlockEstate");
    const basicNft = await ethers.getContract("BasicNft");
    const tx = await blockEstate.cancelListing(basicNft.address, TOKEN_ID);
    await tx.wait(1);
    console.log("NFT Canceled!");
    if (network.config.chainId == 31337) {
        await moveBlocks(2, 1000);
    }
}

cancelProperty()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
