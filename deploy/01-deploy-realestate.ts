import {
    developmentChains,
    NUMBER_OF_BLOCK_CONFIRMATIONS,
    NOTARY_WALLET_ADDRESS,
    SLRB_WALLET_ADDRESS
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
    const waitBlockConfirmations = !developmentChains.includes(network.name)
        ? NUMBER_OF_BLOCK_CONFIRMATIONS
        : 1;

    log(
        "*****************************************************************************************************************************\n"
    );

    // constructor Arguments
    const args: any[] = developmentChains.includes(network.name) ? [notary, slrb] : 
        [NOTARY_WALLET_ADDRESS, SLRB_WALLET_ADDRESS];

    // Deploying Contract
    const blockEstate = await deploy("BlockEstate", {
        from: deployer,
        args: args,
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
    }
    log(
        "\n*****************************************************************************************************************************"
    );
};

export default deployBlockEstate;
deployBlockEstate.tags = ["all", "blockestate"];
