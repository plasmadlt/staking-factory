const StakingRewardsFactory = artifacts.require("StakingRewardsFactory")
module.exports = function(deployer) 
{
  ETH_REWARDS_TOKEN = "";
  ETH_REWARDS_GENESIS = 1614162900; // Add new unix deploy date
  deployer.deploy(StakingRewardsFactory, ETH_REWARDS_TOKEN, ETH_REWARDS_GENESIS);
};
