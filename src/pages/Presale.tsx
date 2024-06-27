import {DepositCard, PreSaleHero, PreSaleInfo} from '@/components';
import {fromReadableAmount} from '@/utils';
import {Col, Row, message} from 'antd';
import {useEffect, useState} from 'react';
import {erc20Abi} from 'viem';
import {useAccount} from 'wagmi';
import Web3 from 'web3';
import {
  getMaxUserDeposit,
  getMinDepositCheck,
  getPresaleById,
  getPresaleTotalDeposit,
  getTotalDepositedAmount,
  postTransaction,
} from '../api/ApiCalls/User';

type Props = {};

const PreSale = (props: Props) => {
  const [ethAmount, setEthAmount] = useState<number>(0);
  const [totalEthDeposited, setTotalEthDeposited] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {address, isConnected, connector} = useAccount();
  const [targetAmount, setTargetAmount] = useState<number>(0);
  const [overflowAmount, setOverflowAmount] = useState<number>(0);

  useEffect(() => {
    const fetchTotalDeposits = async () => {
      try {
        const totalDepositResponse = await getTotalDepositedAmount();
        if (totalDepositResponse.error) {
          message.error(totalDepositResponse.error);
        } else {
          setTotalEthDeposited(totalDepositResponse.total_deposit || 0);
          const parsedTargetAmount = parseFloat(totalDepositResponse.target_amount);
          setTargetAmount(parseFloat(parsedTargetAmount.toFixed(3)));
          setOverflowAmount(totalDepositResponse.overflow_amount || 0);
        }
      } catch (error) {
        message.error('Failed to fetch total deposits');
      }
    };

    fetchTotalDeposits();
  }, []);

  // useEffect(() => {
  //   const fetchPresaleDetails = async () => {
  //     try {
  //       const response = await getPresaleById(1);

  //       if (!response.error) {
  //         const parsedTargetAmount = parseFloat(response.target_amount);
  //         setTargetAmount(parseFloat(parsedTargetAmount.toFixed(3)));
  //       }
  //     } catch (error) {
  //       console.error('Failed to fetch presale details:', error);
  //     }
  //   };

  //   fetchPresaleDetails();
  // }, []);

  const handleDeposit = async () => {
    if (!isConnected || !address || !connector) {
      message.error('Please connect your wallet first');
      return;
    }

    setIsLoading(true);

    const web3 = new Web3((await connector?.getProvider()) as any);
    try {
      const minDepositCheckResponse = await getMinDepositCheck(ethAmount);
      if (minDepositCheckResponse.error) {
        message.error(minDepositCheckResponse.error);
        return;
      }

      const maxUserDepositResponse = await getMaxUserDeposit(
        address,
        ethAmount,
      );
      if (maxUserDepositResponse.error) {
        message.error(maxUserDepositResponse.error);
        return;
      }

      const totalDepositResponse = await getPresaleTotalDeposit();
      if (totalDepositResponse.error) {
        message.error(totalDepositResponse.error);
        return;
      }

      const transactionParameters = {
        from: address,
        to: '0x7868933a36Fb7771f5d87c65857F63C9264d28a4',
        value: web3.utils.toWei(ethAmount.toString(), 'ether'),
        gas: 60000,
      };

      const estimatedGas = await web3.eth.estimateGas(transactionParameters);

      transactionParameters.gas = Number(estimatedGas);;

      const transaction = await web3.eth.sendTransaction(transactionParameters);

      setTotalEthDeposited(totalEthDeposited + ethAmount);
      setEthAmount(0);

      const transactionData = {
        user_wallet_address: address,
        transaction_hash: transaction.transactionHash,
      };

      await postTransaction(transactionData);

      message.success('Transaction recorded');
    } catch (error) {
      message.error(error as any);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Row>
      <Col span={24}>
        <PreSaleHero />
      </Col>
      <Col span={24}>
        <Row style={{marginTop: 36}} gutter={[24, 24]}>
          <Col xs={24} lg={10}>
            <DepositCard
              ethAmount={ethAmount}
              setEthAmount={setEthAmount}
              handleDeposit={handleDeposit}
              isLoading={isLoading}
            />
          </Col>

          <Col xs={24} lg={14}>
            <PreSaleInfo
              totalEthDeposited={totalEthDeposited}
              targetAmount={targetAmount}
              overflowAmount={overflowAmount}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PreSale;
