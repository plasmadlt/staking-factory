# Staking Rewards Factory 


The factory allows you to create a staking contract and implement a liquidity mining or staking program for a any ERC20 tokens.

Everyone can create a liquidity mining initiative program for ERC20 token. Participants - Stakers proportionally of share stake get rewards in ERC20 token while the program will not end.

1. Create liquidity pool to [PlasmaSwap](https://apy.plasma.finance/liquidity-pools/add), Uniswap, SushiSwap. 
2. Customize the program time. 
3. Configure contracts and deploy to Mainnet
4. Create a request to publish a contract for PlasmaFinance by creating issue pull request. 

## Setup 

## Config Migrations 
Set the address of the token for the reward and start the work of the factory smart contract in the migration file. 
 '2_deploy_contracts'

```
  ETH_REWARDS_TOKEN = "";
  ETH_REWARDS_GENESIS = 1614162900; // Add new unix deploy date
```
## StakingRewards.Sol
Set the running time of the program, it will start when you call the notify method. 
 ```
 uint256 public rewardsDuration = 720 hours;
 ```

### 1 step: install 
```
yarn 
```
### 2 step: Deploy to mainnet 
```
truffle migrate --network mainnet
```
## 3 step: Verify
```
truffle run verify StakingRewardsFactory --network mainnet
```

## 4 step: Create Staking Rewards 
Create your Token LM or staking pool on Etherscan. 

- 1. Go to Write contract and adjust the settings with your deployer wallet. 
- 2. Setup Deploy.
- 3. Set a StakingToken for example a liquidity pair example pair tokens P-LP, UNI-V2, SLP.
- 4. RewardAmount of Reward Token. 
- 5. RewardTotalAmount of Reward Token.


 ### Deploy 

- stakingToken (address)
- rewardAmount (uint256)
- rewardTotalAmount (uint256

Call Write and Sign TX


## 5 step: Fill the treasury  
Fill in the address of the Staking Factory contract so that you can call the notify method to send the reward token to the staking contract. 
- 1. Go to Write contract and adjust the settings with your deployer wallet. 
- 2. Set a StakingToken for example a liquidity pair example pair tokens P-LP, UNI-V2, SLP.
- 3. RewardAmount - Amount of Rewards token for remuneration are sent from the contract of Staking Factory. 

### NotifyRewardAmount
- stakingToken (address)
- rewardAmount (uint256)

Call Write and Sign TX

### 5 step: Add StakingRewards contract to Plasma.Finance 
Ask support to list your community incentive products on your token page on Plasma.Finance


In-depth documentation on Staking Factory is available at [docs.plasma.finance](https://docs.plasma.finance)

PlasmaDLT team is not responsible for the use of this code, use at your own risk.
