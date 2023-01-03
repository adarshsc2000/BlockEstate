import { ethers, network, getNamedAccounts } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";

const TOKEN_IDS = [4, 5, 6]

async function buyProperty() {
    const { user2 } = await getNamedAccounts();
    const blockEstate = await ethers.getContract("BlockEstate", user2);
    for (const tokenId of TOKEN_IDS) {

        const listing = await blockEstate.getListedProperty(tokenId);
        const price = listing.price.toString();
        const tx = await blockEstate.payPropertySaleAmount(tokenId,  { value: price });
        await tx.wait(1);
        console.log(`Paid Amount of ${ethers.utils.parseEther(price)} ETH to buy Property of Token ID ${tokenId}`);
        if ((network.config.chainId == 31337)) {
            await moveBlocks(2, 1000);
        }
    }
}

buyProperty()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
