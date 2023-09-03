const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "https://eth-goerli.g.alchemy.com/v2/5EWGa_oWVR7p0Xf7WUe8Hbj1xY6Zr7r7";

async function one() {
    return axios.post(ALCHEMY_URL, {
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getBlockByNumber",
        params: [
            "0xb443", // block 46147
            false  // retrieve the full transaction object in transactions array
        ]
    }).then((response) => {
        console.log(`eth_getBlockByNumber: ${JSON.stringify(response.data.result)}`);
    });
}

async function two() {
    return axios.post(ALCHEMY_URL, {
        jsonrpc: "2.0",
        id: 2,
        method: "eth_getTransactionByHash",
        // Has to be on Goerli where the API key in ALCHEMY_URL is for
        params: [
            "0x0f67681789c5eaf1543999d97cb262b8fb1fa630a0f82c3c3879dceb58878d6f"
        ]
    }).then((response) => {
        console.log(`eth_getTransactionByHash: ${JSON.stringify(response.data, null, 2)}`);
    });
}

function main() {
    one().then(() => {
        console.log(`----------------------------------------------------------------------------`)
    })
    two().then(() => {
        console.log(`----------------------------------------------------------------------------`)
    })
}

main();
