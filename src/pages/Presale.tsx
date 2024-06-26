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

  useEffect(() => {
    const fetchTotalDeposits = async () => {
      try {
        const totalDepositResponse = await getTotalDepositedAmount();
        if (totalDepositResponse.error) {
          message.error(totalDepositResponse.error);
        } else {
          setTotalEthDeposited(totalDepositResponse.total_deposit || 0);
        }
      } catch (error) {
        message.error('Failed to fetch total deposits');
      }
    };

    fetchTotalDeposits();
  }, []);

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

      const maxUserDepositResponse = await getMaxUserDeposit(address, ethAmount);
      if (maxUserDepositResponse.error) {
        message.error(maxUserDepositResponse.error);
        return;
      }

      const totalDepositResponse = await getPresaleTotalDeposit();
      if (totalDepositResponse.error) {
        message.error(totalDepositResponse.error);
        return;
      }

      // const transactionParameters = {
      //   from: address,
      //   to: '0xC495953DE50Ac375e3c564F4Acd4Cc48949576AE', // Update with your contract address
      //   value: web3.utils.toWei(ethAmount.toString(), 'ether'),
      //   gas: 60000,
      // };

      // const transactionHash = await web3.eth.sendTransaction(
      //   transactionParameters,
      // );

      const tokenContract = new web3.eth.Contract(
        erc20Abi,
        '0xE5D3377465D5B1A0096f251Cd7F659dE041F374c',
      );

      const transaction = await tokenContract.methods
        .transfer(
          '0x7868933a36Fb7771f5d87c65857F63C9264d28a4',
          fromReadableAmount(ethAmount),
        )
        .send({
          from: address,
        });

      setTotalEthDeposited(totalEthDeposited + ethAmount);
      setEthAmount(0);

      const transactionData = {
        user_wallet_address: address,
        presale_id: 1,
        transaction_hash: transaction.transactionHash,
        amount: ethAmount,
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
            <PreSaleInfo totalEthDeposited={totalEthDeposited} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PreSale;
