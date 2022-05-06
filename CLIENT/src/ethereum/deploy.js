const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledOrganChain = require('./build/OrganChain.json')

const provider = new  HDWalletProvider(
    'property buffalo jaguar where exit deer blade ceiling suit about carpet market',
    // '#PASTE YOUR ACCOUNT MNEMONIC SEED WORDS HERE#',
    'https://rinkeby.infura.io/v3/d9bbf46ffdde44839ac51b798c3a6f08'
);

const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy contract from account : ' , accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledOrganChain.interface))
    .deploy({ data : compiledOrganChain.bytecode })
    .send({ from : accounts[0] , gas : '10000000'});

    console.log('Contract deployed at address :',result.options.address);
};

deploy();

