import {
    frontEndContractsFile,
    frontEndContractsFile2,
    frontEndAbiLocation,
    frontEndAbiLocation2
} from "../helper-hardhat-config";
import "dotenv/config";
import fs from "fs";
import { network, ethers } from "hardhat";

// Type declarations
import { DeployFunction } from "hardhat-deploy/types";

const updateFrontEnd: DeployFunction = async function() {
    if (process.env.UPDATE_FRONTEND) {
        console.log("Updating contract address to Frontend...");
        await updateContractAddresses();
        console.log("Updating ABIs to Frontend...");
        await updateAbi();
        console.log("Updated to the Frontend");
    }
};

async function updateContractAddresses() {
    const chainId = network.config.chainId!.toString();
    const realEstate = await ethers.getContract("RealEstate");
    const contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"));
    if (chainId in contractAddresses) {
        if (!contractAddresses[chainId]["RealEstate"].includes(realEstate.address)) {
            contractAddresses[chainId]["RealEstate"].push(realEstate.address);
        }
    } else {
        contractAddresses[chainId] = { RealEstate: [realEstate.address] };
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses));
    fs.writeFileSync(frontEndContractsFile2, JSON.stringify(contractAddresses));
}

async function updateAbi() {
    const realEstate = await ethers.getContract("RealEstate");
    fs.writeFileSync(
        `${frontEndAbiLocation}RealEstateAbi.json`,
        realEstate.interface.format(ethers.utils.FormatTypes.json).toString()
    );
    fs.writeFileSync(
        `${frontEndAbiLocation2}RealEstateAbi.json`,
        realEstate.interface.format(ethers.utils.FormatTypes.json).toString()
    );

    const basicNft = await ethers.getContract("BasicNft");
    fs.writeFileSync(
        `${frontEndAbiLocation}BasicNftAbi.json`,
        basicNft.interface.format(ethers.utils.FormatTypes.json).toString()
    );
    fs.writeFileSync(
        `${frontEndAbiLocation2}BasicNftAbi.json`,
        basicNft.interface.format(ethers.utils.FormatTypes.json).toString()
    );
}

export default updateFrontEnd;
updateFrontEnd.tags = ["all", "frontend"];
