import { ethers, network } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";

const PRICE = ethers.utils.parseEther("0.0001");

async function mintAndListProperty() {
    const blockEstate = await ethers.getContract("BlockEstate");
    const randomNumber = Math.floor(Math.random() * 2);
    let basicNft;
    if (randomNumber == 1) {
        basicNft = await ethers.getContract("BasicNftTwo");
    } else {
        basicNft = await ethers.getContract("BasicNft");
    }
    console.log("Minting NFT...");
    const mintTx = await basicNft.mintNft();
    const mintTxReceipt = await mintTx.wait(1);
    const tokenId = mintTxReceipt.events[0].args.tokenId;
    console.log("Approving NFT...");
    const approvalTx = await basicNft.approve(blockEstate.address, tokenId);
    await approvalTx.wait(1);
    console.log("Listing NFT...");
    const tx = await blockEstate.listItem(basicNft.address, tokenId, PRICE);
    await tx.wait(1);
    console.log("NFT Listed!");
    if (network.config.chainId == 31337) {
        // Moralis has a hard time if you move more than 1 at once!
        await moveBlocks(1, 1000);
    }
}

mintAndListProperty()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
