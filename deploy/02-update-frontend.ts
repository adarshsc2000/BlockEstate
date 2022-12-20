import {
    frontEndContractsFile,
    frontEndContractsFile2,
    frontEndAbiLocation
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
        console.log(
            "\n*****************************************************************************************************************************"
        );
    }
};

async function updateContractAddresses() {
    const chainId = network.config.chainId!.toString();
    const blockEstate = await ethers.getContract("BlockEstate");
    const propertyNFT = await ethers.getContract("PropertyNFT");
    const contractAddresses = JSON.parse(
        fs.readFileSync(frontEndContractsFile, "utf8")
    );
    if (chainId in contractAddresses) {
        if (
            !contractAddresses[chainId]["BlockEstate"].includes(
                blockEstate.address
            )
        ) {
            contractAddresses[chainId]["BlockEstate"] = blockEstate.address;
            contractAddresses[chainId]["PropertyNFT"] = propertyNFT.address;
        }
    } else {
        contractAddresses[chainId] = {
            BlockEstate: [blockEstate.address],
            PropertyNFT: [propertyNFT.address],
        };
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses));
    fs.writeFileSync(frontEndContractsFile2, JSON.stringify(contractAddresses));
}

async function updateAbi() {
    const blockEstate = await ethers.getContract("BlockEstate");
    fs.writeFileSync(
        `${frontEndAbiLocation}BlockEstateAbi.json`,
        blockEstate.interface.format(ethers.utils.FormatTypes.json).toString()
    );

    const propertyNFT = await ethers.getContract("PropertyNFT");
    fs.writeFileSync(
        `${frontEndAbiLocation}PropertyNftAbi.json`,
        propertyNFT.interface.format(ethers.utils.FormatTypes.json).toString()
    );
}

export default updateFrontEnd;
updateFrontEnd.tags = ["all", "frontend"];
