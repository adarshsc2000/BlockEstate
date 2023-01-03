import { ethers, network, getNamedAccounts } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";
import { responses } from "../constants/ipfs";
const { storeNFTs } = require("../utils/uploadToNftStorage");

async function mintProperty() {
    const { slrb, user } = await getNamedAccounts();
    const propertyNft = await ethers.getContract("PropertyNFT", slrb);

    // const responses = await storeNFTs("./assets/images/property-image-1.jpg");
    // console.log(responses);
    
    for (const response of responses) {
        console.log("Minting NFT...");
        const mintTx = await propertyNft.mintPropertyNFT(response.url, user, {
            value: ethers.utils.parseEther("0.002")
        });
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
