require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const url = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`;

async function getTotalBalance(addresses) {
    let i = 0
    const batch = addresses.map(a => {
            return {
                jsonrpc: "2.0",
                id: i++,
                method: "eth_getBalance", // <-- fill in the method
                params: [a, 'latest'],  // <-- fill in the params
            }
        });

    const response = await axios.post(url, batch);

    console.log(JSON.stringify(response.data, null, 2));

    return response.data.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.result), 0)
}

module.exports = getTotalBalance;
