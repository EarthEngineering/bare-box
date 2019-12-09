var Test = artifacts.require("./Migrations.sol")
contract("Migrations", function(accounts) {
  it("call method g", function() {
    Test.deployed()
      .then(function(instance) {
        return instance.call("g")
      })
      .then(function(result) {
        assert.equal("method g()", result, "is not call method g")
      })
  })
})
