require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/ePoBB4scvYcVZJUMmBo-DuyyOtoCeZjx",
      accounts: [ "a6ad31bafdac23370bfc01b1b31227c74c80a8b7ca8525432417f44da4df6505" ],
    },
  },
};