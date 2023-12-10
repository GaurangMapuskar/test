const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction)
}

function mine() {
    // Step 1: Create a block with Block Id ,nonce.
    // Step 2: Add all the transaction from mempool to Block.transaction.Also check for difficulty.
    // Step 3: Mine the block and solve the difficuty to find right nonce.
    // Step 4: Hash the block with tx and store in blocks array.
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};