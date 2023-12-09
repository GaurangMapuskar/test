// Import the getBlockNumber function
const getBlockNumber = require('./src/getBlockNumber');

// Driver code to call the getBlockNumber function
async function main() {
    try {
        // Call the getBlockNumber function
        const blockNumber = await getBlockNumber();

        // Log the result
        console.log('Current Block Number:', blockNumber);
    } catch (error) {
        console.error('Error fetching block number:', error.message);
    }
}

// Execute the driver code
main();
