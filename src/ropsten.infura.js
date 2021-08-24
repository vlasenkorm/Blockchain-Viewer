import * as Web3 from 'web3';

const rpcURL = "https://ropsten.infura.io/v3/2525d7ba236540b7a4002a5bb3995d0f"
const web3 = new Web3(rpcURL)

const address = '0x4f7f1380239450AAD5af611DB3c3c1bb51049c29'

const abi = [
  { 
    "inputs": [], 
    "payable": false, 
    "stateMutability": "nonpayable", 
    "type": "constructor" 
  }, 
  { 
    "constant": true, 
    "inputs": [], 
    "name": "getGroupIds", 
    "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], 
    "payable": false, 
    "stateMutability": "view", 
    "type": "function" 
  }, 
  { 
    "constant": true, 
    "inputs": [{ "internalType": "uint256", "name": "_groupId", "type": "uint256" }], 
    "name": "getGroup", 
    "outputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "uint256[]", "name": "indexes", "type": "uint256[]" }], 
    "payable": false, 
    "stateMutability": "view", 
    "type": "function" 
  }, 
  { 
    "constant": true, 
    "inputs": [{ "internalType": "uint256", "name": "_indexId", "type": "uint256" }], 
    "name": "getIndex", 
    "outputs": [{ "internalType": "string", "name": "name", "type": "string" }, 
    { "internalType": "uint256", "name": "ethPriceInWei", "type": "uint256" }, 
    { "internalType": "uint256", "name": "usdPriceInCents", "type": "uint256" }, 
    { "internalType": "uint256", "name": "usdCapitalization", "type": "uint256" }, 
    { "internalType": "int256", "name": "percentageChange", "type": "int256" }], 
    "payable": false, 
    "stateMutability": "view", 
    "type": "function" 
  }
]

export const contract = new web3.eth.Contract(abi, address)