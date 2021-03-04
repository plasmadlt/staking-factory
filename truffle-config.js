require('dotenv').config()
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = process.env.MNEMONIC
const MAINNET_URL = process.env.MAINNET_URL

module.exports = {
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 999999
        },
        evmVersion: "istanbul"
      }
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: '' // Add  API key 
  },
  networks: {
    mainnet: {
      provider: () => new HDWalletProvider(MNEMONIC, MAINNET_URL),
      network_id: 1,
      gasPrice: 75000000000 //Setup Gwei
    }
  }
};
