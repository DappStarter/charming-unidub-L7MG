require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remind punch harvest casual flat genuine'; 
let testAccounts = [
"0x7cf6cc71f75ad6230581baf8dcbe555131b327c117aafde56eb906fffc30eff0",
"0xf33fe76fc762216f1574978f8e2cfc4772e0213f6c8c54a3017ae49f19db639c",
"0x2a103877b40f8438c4f2e282d8efcfb19ea7fab5dd5aad86593429ecc50f2458",
"0x886b7e1daabf3abcd03f9193123ad800301df84c02f7eb360ba7445f14317744",
"0xa221d1827aeb43aa575b2aa0aa4971f949b609be8607536a590cc2b65476d5b7",
"0x2b75cc061e976f7c875d9673b2c6303dee107854ae15d481ca46f16373f8307d",
"0xd39d4dcd9bd6aa2685608544b65b21f7301f0e811cb3b41ec84835d83f413070",
"0xc50ff8d5c1871f4d79e7ed0e2b34ee1f93cb87b388e37289e571cf4ecae4e3ca",
"0x434be7b8ffda29af62521f04e6b35860c06224bfe401015fbc117b9df1b10361",
"0x5d4b5bf0eadb79be79ac64446adcd431dd073752b86424690d7bc0aee708681b"
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

