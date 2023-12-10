const axios = require('axios');

// grab the API key from the .env
require('dotenv').config();
const url = `https://eth-mainnet.g.alchemy.com/v2/${process.env.API_KEY}`;
    // Create a Alceamy account and get the API key and URL.
async function getBlockNumber() {
    
    // Create a data and post the request for JSON-RPC.
    // eth_blockNumber,  eth_getBalance,  eth_getTransactionCount,  eth_getBlockTransactionCountByNumber
    
}

module.exports = getBlockNumber;