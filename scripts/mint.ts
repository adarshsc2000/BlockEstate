import { ethers, network } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";

const PRICE = ethers.utils.parseEther("0.0001");

async function mintNft() {
    const basicNft = await ethers.getContract("BasicNftTwo")
    console.log("Minting NFT...")
    const mintTx = await basicNft.mintNft()
    const mintTxReceipt = await mintTx.wait(1)
    console.log(
        `Minted tokenId ${mintTxReceipt.events[0].args.tokenId.toString()} from contract: ${
            basicNft.address
        }`
    )
    if (network.config.chainId == 31337) {
        // Moralis has a hard time if you move more than 1 block!
        await moveBlocks(2, 1000)
    }
}

mintNft()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
