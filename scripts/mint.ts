import { ethers, network, getNamedAccounts } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";
const { storeNFTs } = require("../utils/uploadToNftStorage");

async function mintProperty() {
    const { user } = await getNamedAccounts();
    const propertyNft = await ethers.getContract("PropertyNFT", user);
    const responses = await storeNFTs("./assets/blockestate-logo.png");

    for (const response of responses) {
        console.log("Minting NFT...");
        const mintTx = await propertyNft.mintProperty(response.url, user);
        const mintTxReceipt = await mintTx.wait(1);
        console.log(
            `Minted tokenId ${mintTxReceipt.events[0].args.tokenId.toString()} from contract: ${
                propertyNft.address
            }`
        );
        if (network.config.chainId == 31337) {
            await moveBlocks(1, 1000);
        }
    }
}

mintProperty()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
