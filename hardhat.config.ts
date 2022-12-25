// types
import { HardhatUserConfig } from "hardhat/config";

import "@nomicfoundation/hardhat-toolbox";
import "solidity-coverage";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import "dotenv/config";

const ADMIN_PRIVATE_KEY = process.env.ADMIN_PRIVATE_KEY || "";
const NOTARY_PRIVATE_KEY = process.env.NOTARY_PRIVATE_KEY || "";
const SLRB_PRIVATE_KEY = process.env.SLRB_PRIVATE_KEY || "";
const USER_PRIVATE_KEY = process.env.USER_PRIVATE_KEY || "";
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "";
const REPORT_GAS = Boolean(process.env.REPORT_GAS) || undefined;

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            // // If you want to do some forking, uncomment this
            // forking: {
            //   url: MAINNET_RPC_URL
            // }
            chainId: 31337
        },
        localhost: {
            chainId: 31337
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [
                ADMIN_PRIVATE_KEY,
                NOTARY_PRIVATE_KEY,
                SLRB_PRIVATE_KEY,
                USER_PRIVATE_KEY
            ],
            chainId: 5
        }
        // mainnet: {
        //     url: MAINNET_RPC_URL,
        //     accounts: ADMIN_PRIVATE_KEY !== undefined ? [ADMIN_PRIVATE_KEY] : [],
        //     //   accounts: {
        //     //     mnemonic: MNEMONIC,
        //     //   },
        //     saveDeployments: true,
        //     chainId: 1,
        // },
        // polygon: {
        //     url: POLYGON_MAINNET_RPC_URL,
        //     accounts: ADMIN_PRIVATE_KEY !== undefined ? [ADMIN_PRIVATE_KEY] : [],
        //     saveDeployments: true,
        //     chainId: 137,
        // },
    },
    etherscan: {
        // npx hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
        apiKey: {
            goerli: ETHERSCAN_API_KEY
            // polygon: POLYGONSCAN_API_KEY,
        }
    },
    gasReporter: {
        enabled: REPORT_GAS,
        currency: "BHD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
    // contractSizer: {
    //     runOnCompile: false,
    //     only: ["BlockEstate"],
    // },
    namedAccounts: {
        deployer: {
            default: 0 // here this will by default take the first account as deployer
        },
        notary: {
            default: 1
        },
        slrb: {
            default: 2
        },
        user: {
            default: 3
        }
    },
    solidity: {
        compilers: [
            {
                version: "0.8.9"
            }
        ]
    },
    mocha: {
        timeout: 2000000 // 2000 seconds max for running tests
    }
};

export default config;
