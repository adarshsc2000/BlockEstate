import { ethers, network, getNamedAccounts } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";

const TOKEN_IDS = [3, 4, 5, 6]

async function verifyProperty() {
    const { notary } = await getNamedAccounts();
    const blockEstate = await ethers.getContract("BlockEstate", notary);
    for (const tokenId of TOKEN_IDS) {
        const tx = await blockEstate.propertyVerified(tokenId);
        await tx.wait(1);
        console.log("Notary has verified the Property with Token ID ", tokenId);
        if (network.config.chainId == 31337) {
            await moveBlocks(1, 1000);
        }
    }
}

verifyProperty()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
