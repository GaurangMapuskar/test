// Import the Transaction and TXO classes
const Transaction = require('./transaction');
const TXO = require('./TXO');

// Example UTXOs using the TXO class
const inputUTXOs = [
    new TXO('Alice', 10),
    new TXO('Bob', 5),
];

const outputUTXOs = [
    new TXO('Charlie', 12),
    new TXO('David', 2),
];

// Create a new transaction
const myTransaction = new Transaction(inputUTXOs, outputUTXOs);

try {
    // Execute the transaction
    myTransaction.execute();

    // If the transaction is successful, log details
    console.log('Transaction executed successfully!');
    console.log('Transaction Fee:', myTransaction.fee);
    console.log('Updated Input UTXOs:', myTransaction.transaction.inputUTXOs);
} catch (error) {
    // If an error occurs during execution, log the error
    console.error('Error during transaction execution:', error.message);
}
