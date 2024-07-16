//Staking contracts logic
import {parseEther} from 'viem';
import {waitForTransactionReceipt, writeContract} from 'wagmi/actions';
import paladins from '../abis/paladins.json';
import stakingABI from '../abis/stakingAbi.json';
import {CORE_CONTRACT_ADDRESS, STAKING_CONTRACT_ADDRESS} from '../constants';
import {config} from './wagmi';
const stakeTokens = async () => {
  console.log('unstaking tokens ');
  try {
    await approveTokens();
    //@ts-ignore
    const tx = await writeContract(config, {
      abi: stakingABI,
      address: STAKING_CONTRACT_ADDRESS,
      functionName: 'stake',
      args: [parseEther('1')],
    });
    console.log(tx);
    //@ts-ignore
  } catch (error: ExecutionRevertedError) {
    console.log(error.message);
  }
};
const approveTokens = async () => {
  try {
    const tx = await writeContract(config, {
      abi: paladins,
      address: CORE_CONTRACT_ADDRESS,
      functionName: 'erc20Approve',
      args: [STAKING_CONTRACT_ADDRESS, parseEther('1')],
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
export default stakeTokens;
