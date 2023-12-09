class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.transaction = { inputUTXOs, outputUTXOs}
    }
    execute() {

        // Step 1: Check for the DoubleSpend.
        // Step 2: Calculate the Total Input and Output and if balance is avaliable.
        // Step 3: Change the spent of each input transaction used.
        // Step 4: Calculate the fees.
        
    }
}

module.exports = Transaction;