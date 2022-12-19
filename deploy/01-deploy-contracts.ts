import {
    developmentChains,
    NUMBER_OF_BLOCK_CONFIRMATIONS,
    networkConfig
} from "../helper-hardhat-config";
import verify from "../utils/verify";

// Type declarations
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

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
    // Constructor Arguments for BlockEstate
    const args: any[] = [notary, slrb];

    // Deploying BlockEstate Contract
    const blockEstate = await deploy("BlockEstate", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: waitBlockConfirmations
    });

    const argsNFT: any[] = [blockEstate.address, networkConfig[chainId]["mintFee"]];

    // Deploying PropertyNFT Contract
    const propertyNFT = await deploy("PropertyNFT", {
        from: deployer,
        args: argsNFT,
        log: true,
        waitConfirmations: waitBlockConfirmations
    });

    // Verify the deployment
    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        log("Verifying...");
        await verify(blockEstate.address, args);
        await verify(propertyNFT.address, argsNFT);
    }
    log(
        "\n*****************************************************************************************************************************"
    );
};

export default deployBlockEstate;
deployBlockEstate.tags = ["all", "blockestate", "property-nft"];
