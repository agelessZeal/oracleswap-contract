import * as dotenv from "dotenv";
import "dotenv/config";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-solhint";
import "@tenderly/hardhat-tenderly";
import "hardhat-abi-exporter";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "hardhat-watcher";
import "hardhat-contract-sizer";

const config: HardhatUserConfig = {
  abiExporter: {
    path: "./abi",
    clear: true,
    flat: true,
    only: [":OracleSwap$"],
    except: [],
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    dev: {
      // Default to 1
      default: 1,
      // dev address mainnet
      // 1: "",
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: false,
    only: [],
  },
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 9999,
          },
        },
      },
    ],
  },
  // spdxLicenseIdentifier: {
  //   overwrite: false,
  //   runOnCompile: true,
  // },
  tenderly: {
    project: process.env.TENDERLY_PROJECT!,
    username: process.env.TENDERLY_USERNAME!,
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
  watcher: {
    compile: {
      tasks: ["compile"],
      files: ["./contracts"],
      verbose: true,
    },
  },
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: `https://polygon-rpc.com`,
      },
      live: false,
      saveDeployments: true,
      tags: ["test", "local"],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      chainId: 4,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 5000000000,
      gasMultiplier: 2,
    },
    matic: {
      url: "https://polygon-rpc.com",
      accounts: [process.env.PRIVATE_KEY || ""],
      chainId: 137,
      saveDeployments: true,
      live: true,
    },
    polygon: {
      url: "https://polygon.blockpi.network/v1/rpc/public",
      accounts: [process.env.PRIVATE_KEY || ""],
      chainId: 137,
      saveDeployments: true,
      live: true,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      chainId: 80001,
      live: true,
      gasPrice: 35000000000,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: {
      rinkeby: process.env.ETHERSCAN_API_KEY || "",
      kovan: process.env.ETHERSCAN_API_KEY || "",
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      bsc: process.env.BSCSCAN_API_KEY || "",
      matic: process.env.POLYGONSCAN_API_KEY || "",
      polygon: process.env.POLYGONSCAN_API_KEY || "",
      fantom: process.env.FTMSCAN_API_KEY || "",
      avalache: process.env.SHOWTRACE_API_KEY || "",
      "arbitrum-one": process.env.ARBISCAN_API_KEY || "",
    },
  },
};

export default config;
