require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth often company install forum equal ghost'; 
let testAccounts = [
"0xc7842b25ef9d6050389414eb171a5ad21cd016a87132a85dc61d63192aab9711",
"0x0445ff29bd63bfa0cd1ee17f1a3bfdf2bbfd2adfde4ee2e3b894f85a1495e52a",
"0x771d21ad6d37a88104a35b15a5d1de0ba7b6733c29b93a8494e5efdda2fa15d4",
"0x0991a18f0ebe92738311bce0c466756473c9ccb3388762762cbe27a3953e5708",
"0xbb546ac13188bb0bab92e3eec5a6cb73690374afe6470c93a41a3f6acc54a6bd",
"0x1587574d1d64c134e356951350cd61d9ce823e29233fe9b633a182eb1358146c",
"0xe1ca08b927717bba711e7d4c105090b11c2e991b6b6d63242d91787a76d7f9b1",
"0xedcf35edb57bad21e9c348f67d62bc94e0b37ae22f0a9b3808fa6551727ce228",
"0xc00442c6f09984a198a6939f19aafe1472711e9c6f64c39344d2c61adb4739fa",
"0x267d4bbaff0b294d9f0966ec1a842387155d10e3ce832d61cbc0814106551303"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

