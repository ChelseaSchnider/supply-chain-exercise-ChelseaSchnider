module.exports = {
  compilers: {
    solc: {
      version: "0.7.0",
    }
  },
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
