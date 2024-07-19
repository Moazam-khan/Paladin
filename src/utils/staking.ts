//Staking contracts logic

import {
  readContract,
  waitForTransactionReceipt,
  writeContract,
} from 'wagmi/actions';

import {formatEther} from 'viem';
import paladins from '../abis/paladins.json';
import stakingABI from '../abis/stakingAbi.json';
import {CORE_CONTRACT_ADDRESS, STAKING_CONTRACT_ADDRESS} from '../constants';
import {config} from './wagmi';
const stakeTokens = async (tokenAmount: bigint) => {
  try {
    await approveTokens(tokenAmount);
    //@ts-ignore
    const tx = await writeContract(config, {
      abi: stakingABI,
      address: STAKING_CONTRACT_ADDRESS,
      functionName: 'stake',
      args: [tokenAmount],
    });
    console.log(tx);
    //@ts-ignore
  } catch (error: ExecutionRevertedError) {
    console.log(error.message);
  }
};
const fetchBalance = async (address: any): Promise<bigint> => {
  try {
    const balance: bigint = (await readContract(config, {
      abi: paladins,
      address: CORE_CONTRACT_ADDRESS,
      functionName: 'balanceOf',
      args: [address],
    })) as bigint;
    return balance;
  } catch (error) {
    console.log('error ', error);
    return 0n;
  }
};
const approveTokens = async (tokenAmount: bigint) => {
  try {
    const tx = await writeContract(config, {
      abi: paladins,
      address: CORE_CONTRACT_ADDRESS,
      functionName: 'erc20Approve',
      args: [STAKING_CONTRACT_ADDRESS, tokenAmount],
    });
    const transactionReceipt = await waitForTransactionReceipt(config, {
      hash: tx,
    });
    console.log(transactionReceipt);
    //@ts-ignore
  } catch (error: ExecutionRevertedError) {
    console.log(error.message);
  }
};

const calculateYeildPoint = async (address: any) => {
  let userStaked;
  try {
    userStaked = await readContract(config, {
      address: STAKING_CONTRACT_ADDRESS,
      abi: stakingABI,
      functionName: 'userStake',
      args: [address],
    });
  } catch (error) {
    console.log('calculateYeildError', error);
  }
  const rewardRate = 0.001; // 0.1 %
  //@ts-ignore
  const tokensStaked = formatEther(userStaked[0] as bigint);
  //@ts-ignore
  const depositTime = userStaked[2] as bigint;
  const depositDate = new Date(parseInt(depositTime.toString()) * 1000);
  const currentDate = new Date();
  // Reward per minute
  const timeElapsed = currentDate.getTime() - depositDate.getTime();
  const timeElapsedMinutes = Math.floor(timeElapsed / (1000 * 60));
  const yeildPoint = rewardRate * timeElapsedMinutes * parseFloat(tokensStaked);
  return yeildPoint;
};
export {calculateYeildPoint, fetchBalance, stakeTokens};
