module.exports = {
  networks: {
    development: {
      from: 'TPL66VK2gCXNCD7EJg9pgJRfqcRazjhUZY',
      privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0',
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      host: "https://api.trongrid.io",
      port: 8090,
      fullNode: "https://api.trongrid.io:8090",
      solidityNode: "https://api.trongrid.io:8091",
      eventServer: "https://api.trongrid.io",
      network_id: "*" // Match any network id
    },
    production: {}
  }
};
