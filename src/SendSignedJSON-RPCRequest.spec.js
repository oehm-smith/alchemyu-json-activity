const SendSignedJSON_RPCRequest = require('./SendSignedJSON-RPCRequest')

global.console = require('console');

describe('SendSignedJSON_RPCRequest', () => {
    it('run it', async () => {
        await SendSignedJSON_RPCRequest();
    })
})
