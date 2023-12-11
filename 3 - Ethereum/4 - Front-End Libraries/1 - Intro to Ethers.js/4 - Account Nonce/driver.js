const sendEther = require('./src/sendEther');
const ethers = require('ethers');
// Driver code to send Ether
async function main() {
    try {
        // Specify the recipient address and the amount of Ether to send 0xdD0DC6FB59E100ee4fA9900c2088053bBe14DE92
        const recipientAddress = '';
        const etherAmount = ethers.utils.parseUnits('1', 'ether');
         
        // Create a Transaction and send it.
        
    } catch (error) {
        console.error('Error sending Ether:', error.message);
    }
}

// Execute the driver code
main();
