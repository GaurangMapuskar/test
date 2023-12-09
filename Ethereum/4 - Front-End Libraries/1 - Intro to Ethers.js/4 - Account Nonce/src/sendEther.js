const { Wallet, utils, providers } = require('ethers');
const { ganacheProvider, PRIVATE_KEY } = require('./config');

// TODO: replace undefined with a new web3 provider
const provider = new providers.Web3Provider(ganacheProvider);; 

const wallet = new Wallet(PRIVATE_KEY, provider);

async function sendEther({ value, to }) {
    // send a transaction using sendtransaction function and calculate nonce.
    // Find the balance of the Account.
}

module.exports = sendEther;