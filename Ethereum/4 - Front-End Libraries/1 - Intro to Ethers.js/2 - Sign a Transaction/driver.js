const signaturePromise = require('./src/sign');

// Driver code to sign a transaction
async function main() {
    try {
        // Wait for the signaturePromise to resolve
        const signature = await signaturePromise;

        // Log the signature
        console.log('Transaction Signature:', signature);
    } catch (error) {
        console.error('Error signing transaction:', error.message);
    }
}

// Execute the driver code
main();