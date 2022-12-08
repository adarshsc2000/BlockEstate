import { developmentChains, NUMBER_OF_BLOCK_CONFIRMATIONS } from "../helper-hardhat-config";
import verify from "../utils/verify";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployBasicNft: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, network, ethers } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const waitBlockConfirmations = !developmentChains.includes(network.name)
        ? NUMBER_OF_BLOCK_CONFIRMATIONS
        : 1;

    log(
        "*****************************************************************************************************************************\n"
    );

    const args: any[] = [];
    const basicNft = await deploy("BasicNft", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: waitBlockConfirmations,
    });

    const basicNftTwo = await deploy("BasicNftTwo", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: waitBlockConfirmations,
    });

    // Verify the deployment
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...");
        await verify(basicNft.address, args);
        await verify(basicNftTwo.address, args);
    }
    log(
        "\n*****************************************************************************************************************************"
    );
};

export default deployBasicNft;
deployBasicNft.tags = ["all", "basicnft"];
