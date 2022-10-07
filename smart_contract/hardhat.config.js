require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Lr0nDU3UfAMkFcSOI-QkuQNOwdovpttJ',
      accounts: ['c8493155d9450886419ccc8ecff2161b9da54c938f4c87c31f4db2827a0c0ef5']
    }

  }
}