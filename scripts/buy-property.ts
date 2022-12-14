import { ethers, network } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";

const TOKEN_ID = 1;

async function buyProperty() {
    const blockEstate = await ethers.getContract("BlockEstate");
    const basicNft = await ethers.getContract("BasicNft");
    const listing = await blockEstate.getListing(basicNft.address, TOKEN_ID);
    const price = listing.price.toString();
    const tx = await blockEstate.buyItem(basicNft.address, TOKEN_ID, { value: price });
    await tx.wait(1);
    console.log("NFT Bought!");
    if ((network.config.chainId == 31337)) {
        await moveBlocks(2, 1000);
    }
}

buyProperty()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
