// driver.js
const signMessage = require('./signMessage'); // Replace with the actual filename

// Example message to sign
const messageToSign = "Hello, Ethereum!";

// Call the signMessage function with the example message
signMessage(messageToSign)
    .then(signature => {
        console.log(`Signature for message "${messageToSign}":`, signature);
    })
    .catch(error => {
        console.error("Error:", error);
    });
