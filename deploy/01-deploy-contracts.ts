import {
    developmentChains,
    NUMBER_OF_BLOCK_CONFIRMATIONS,
    networkConfig
} from "../helper-hardhat-config";
import verify from "../utils/verify";

// Type declarations
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ethers } from "hardhat";

const deployBlockEstate: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
) {
    const { deployments, getNamedAccounts, network } = hre;
    const { deploy, log } = deployments;
    const { deployer, notary, slrb } = await getNamedAccounts();
    const chainId = network.config.chainId!;
    const waitBlockConfirmations = !developmentChains.includes(network.name)
        ? NUMBER_OF_BLOCK_CONFIRMATIONS
        : 1;

    log(
        "*****************************************************************************************************************************\n"
    );

    // Constructor Arguments for PropertyNFT
    const argsNFT: any[] = [networkConfig[chainId]["mintFee"], slrb];

    // Deploying PropertyNFT Contract
    const propertyNFT = await deploy("PropertyNFT", {
        from: deployer,
        args: argsNFT,
        log: true,
        waitConfirmations: waitBlockConfirmations
    });
    // Constructor Arguments for BlockEstate
    const args: any[] = [propertyNFT.address, notary, slrb];

    // Deploying BlockEstate Contract
    const blockEstate = await deploy("BlockEstate", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: waitBlockConfirmations
    });

    console.log(
        "Providing access to BlockEstate to mint and burn Property NFTs"
    );
    // Provide BlockEstate with the permission to mint PropertyNFT
    const propertyNFTContract = await ethers.getContract(
        "PropertyNFT",
        deployer
    );
    const isApprovedForAll = propertyNFTContract.isApprovedForAll(
        deployer,
        blockEstate.address
    );
    if (!isApprovedForAll) {
        await propertyNFTContract.setApprovalForAll(blockEstate.address, true);
        console.log("Access Provided!");
    } else {
        console.log("Access has already been provided!");
    }


    // Verify the deployment
    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        log("Verifying...");
        await verify(propertyNFT.address, argsNFT);
        await verify(blockEstate.address, args);
    }
    log(
        "\n*****************************************************************************************************************************"
    );
};

export default deployBlockEstate;
deployBlockEstate.tags = ["all", "blockestate", "property-nft"];
