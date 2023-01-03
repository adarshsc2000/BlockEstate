import { ethers, network, getNamedAccounts } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";

const TOKEN_IDS = [2, 3, 4, 5, 6]

async function interestedProperty() {
    const { user2 } = await getNamedAccounts();
    const blockEstate = await ethers.getContract("BlockEstate", user2);
    for (const tokenId of TOKEN_IDS) {
        const tx = await blockEstate.propertyInterested(tokenId);
        await tx.wait(1);
        console.log("Buyer shown interest in buying Property with Token ID ", tokenId);
        if (network.config.chainId == 31337) {
            await moveBlocks(1, 1000);
        }
    }
}

interestedProperty()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
