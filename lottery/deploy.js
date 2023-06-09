const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'wheat speed much embrace wool girl hidden nation answer comfort snack reflect',
  'https://sepolia.infura.io/v3/5fa689a24e9f4deaaeba53dbd101ad99',
  // remember to change this to your own phrase!
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  // console.log(interface);
  provider.engine.stop();
};
deploy();
