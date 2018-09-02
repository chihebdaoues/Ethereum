const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {
  interface,
  bytecode
} = require('./compile');

const provider = new HDWalletProvider(
  'hungry regret gorilla scatter hire narrow note bulk stamp only assume oak',
  'https://rinkeby.infura.io/v3/1449f556980a4beb900a90966ecdeb6d'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({
    data: ('0x'+bytecode),
    arguments: ['Hi there!']
  })
  .send({
    from: accounts[0],
    gas: '1000000'
  });

  console.log('Contract deployed to ', result.options.address);
};
deploy();
