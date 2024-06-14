import {CORE_CONTRACT_ADDRESS, MINT_CONTRACT_ADDRESS} from '@/constants';
import {useSelector} from '@/store';
import {
  colors,
  convertDataUrlToJson,
  convertNftData,
  extractTokenIdsFromReceipt,
  fontFamily,
} from '@/utils';
import {MinusOutlined, PlusOutlined} from '@ant-design/icons';
import {Col, Row, Spin, message} from 'antd';
import BigNumber from 'bignumber.js';
import {Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useAccount} from 'wagmi';
import Web3 from 'web3';
import mintAbi from '../../abis/mintAbi.json';
import paladinsAbi from '../../abis/paladins.json';
import Button from '../Button';
import NftCard from '../NftCard';
import Text from '../Text';
import AppModal from './AppModal';

const temp_data = {
  blockHash:
    '0xc20494d14f7e4ab7037b94fc4ace38df5850033c2abdac19f76c7578a47a1c22',
  blockNumber: '6098802',
  cumulativeGasUsed: '4558631',
  effectiveGasPrice: '42082339165',
  from: '0x7868933a36fb7771f5d87c65857f63c9264d28a4',
  gasUsed: '160548',
  logs: [
    {
      address: '0x9bdb5d66d7fd059504aa9d9cccbed87c50ed7b5c',
      blockHash:
        '0xc20494d14f7e4ab7037b94fc4ace38df5850033c2abdac19f76c7578a47a1c22',
      blockNumber: '6098802',
      data: '0x0000000000000000000000000000000000000000000000000000000000000002',
      logIndex: '213',
      removed: false,
      topics: [
        '0xe38cbc8a9e3260a040319ef457cdd3ffa680a53703ce325be58a81bfbbc63b79',
        '0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4',
      ],
      transactionHash:
        '0xc922bf549b729d6f047bd7ea6b24599cd9e8664673c5d7b6b78fd5c23465740b',
      transactionIndex: '12',
    },
    {
      address: '0xac635e8fae88e9042e1dd46b6c757b1bc94aaba7',
      blockHash:
        '0xc20494d14f7e4ab7037b94fc4ace38df5850033c2abdac19f76c7578a47a1c22',
      blockNumber: '6098802',
      data: '0x0000000000000000000000000000000000000000000000001bc16d674ec80000',
      logIndex: '214',
      removed: false,
      topics: [
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
        '0x0000000000000000000000009bdb5d66d7fd059504aa9d9cccbed87c50ed7b5c',
        '0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4',
      ],
      transactionHash:
        '0xc922bf549b729d6f047bd7ea6b24599cd9e8664673c5d7b6b78fd5c23465740b',
      transactionIndex: '12',
    },
    {
      address: '0xac635e8fae88e9042e1dd46b6c757b1bc94aaba7',
      blockHash:
        '0xc20494d14f7e4ab7037b94fc4ace38df5850033c2abdac19f76c7578a47a1c22',
      blockNumber: '6098802',
      data: '0x',
      logIndex: '215',
      removed: false,
      topics: [
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        '0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4',
        '0x8000000000000000000000000000000000000000000000000000000000000011',
      ],
      transactionHash:
        '0xc922bf549b729d6f047bd7ea6b24599cd9e8664673c5d7b6b78fd5c23465740b',
      transactionIndex: '12',
    },
    {
      address: '0xac635e8fae88e9042e1dd46b6c757b1bc94aaba7',
      blockHash:
        '0xc20494d14f7e4ab7037b94fc4ace38df5850033c2abdac19f76c7578a47a1c22',
      blockNumber: '6098802',
      data: '0x',
      logIndex: '216',
      removed: false,
      topics: [
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        '0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4',
        '0x8000000000000000000000000000000000000000000000000000000000000012',
      ],
      transactionHash:
        '0xc922bf549b729d6f047bd7ea6b24599cd9e8664673c5d7b6b78fd5c23465740b',
      transactionIndex: '12',
    },
  ],
  logsBloom:
    '0x00010000c00000100000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000008000008000400000000000000000000000000000008000000000000020000000000000000000800000000000000000000000050000000000000000000000000210000002000000000000000000000000000001000000000000000800000100000000020000000000000400000000000000000000000000000000002000000000000200000000000000000000000000000040000000020000000000020000000000000000000000000000000000000000000000000000000',
  status: '1',
  to: '0x9bdb5d66d7fd059504aa9d9cccbed87c50ed7b5c',
  transactionHash:
    '0xc922bf549b729d6f047bd7ea6b24599cd9e8664673c5d7b6b78fd5c23465740b',
  transactionIndex: '12',
  type: '2',
  events: {
    NFTPurchased: {
      address: '0x9bdb5d66d7fd059504aa9d9cccbed87c50ed7b5c',
      blockHash:
        '0xc20494d14f7e4ab7037b94fc4ace38df5850033c2abdac19f76c7578a47a1c22',
      blockNumber: '6098802',
      data: '0x0000000000000000000000000000000000000000000000000000000000000002',
      logIndex: '213',
      removed: false,
      topics: [
        '0xe38cbc8a9e3260a040319ef457cdd3ffa680a53703ce325be58a81bfbbc63b79',
        '0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4',
      ],
      transactionHash:
        '0xc922bf549b729d6f047bd7ea6b24599cd9e8664673c5d7b6b78fd5c23465740b',
      transactionIndex: '12',
      returnValues: {
        '0': '0x7868933a36Fb7771f5d87c65857F63C9264d28a4',
        '1': '2',
        __length__: 2,
        buyer: '0x7868933a36Fb7771f5d87c65857F63C9264d28a4',
        amount: '2',
      },
      event: 'NFTPurchased',
      signature:
        '0xe38cbc8a9e3260a040319ef457cdd3ffa680a53703ce325be58a81bfbbc63b79',
      raw: {
        data: '0x0000000000000000000000000000000000000000000000000000000000000002',
        topics: [
          '0xe38cbc8a9e3260a040319ef457cdd3ffa680a53703ce325be58a81bfbbc63b79',
          '0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4',
        ],
      },
    },
  },
};

type Props = {};

const MintNftModal = (props: Props) => {
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const nftData = useSelector().buyNftModalData;
  const setBuyNftModal = useSelector().setBuyNftModal;
  const [modalStage, setModalStage] = useState<'mint' | 'minting' | 'minted'>(
    'mint',
  );
  const [purchasedNFTs, setPurchasedNFTs] = useState<any>([]);

  const [nftPrice, setNFTPrice] = useState<BigNumber>(
    BigNumber('20000000000000000'),
  );
  const {address, connector} = useAccount();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const web3 = new Web3((await connector?.getProvider()) || '');
      const contract = new web3.eth.Contract(mintAbi, MINT_CONTRACT_ADDRESS);

      const price: string = await contract.methods.price().call();

      setNFTPrice(BigNumber(price));
      setLoading(false);
    };
    loadData();
  }, [connector]);

  const closeModal = () => {
    setBuyNftModal({isOpen: false});
    setModalStage('mint');
    setAmount(0);
  };

  const fetchNftMetadata = async (tokenIds: any) => {
    try {
      const web3 = new Web3((await connector?.getProvider()) || '');
      const contract = new web3.eth.Contract(
        paladinsAbi,
        CORE_CONTRACT_ADDRESS,
      );

      const allURIs = [];

      for (const tokenId of tokenIds) {
        const tokenUri = await contract.methods.tokenURI(tokenId).call();

        allURIs.push(convertNftData(convertDataUrlToJson(tokenUri)));
      }
      setPurchasedNFTs(allURIs);
    } catch (error) {
      console.error(error);
      message.error('Failed to fetch NFT metadata');
    }
  };

  const handleMintNft = async () => {
    setModalStage('minting');
    setPurchasedNFTs([]);
    if (!amount || isNaN(amount)) {
      message.error('Please enter a valid amount');
      return;
    }

    setLoading(true);
    try {
      // const web3 = new Web3((await connector?.getProvider()) || '');
      // const contract = new web3.eth.Contract(mintAbi, MINT_CONTRACT_ADDRESS);

      // const price: string = await contract.methods.price().call();

      // const gas: bigint = await contract.methods.buy(amount).estimateGas({
      //   from: address,
      //   value: BigNumber(price).multipliedBy(BigNumber(amount)).toString(),
      // });

      // const tx = await contract.methods.buy(amount).send({
      //   from: address,
      //   value: BigNumber(price).multipliedBy(BigNumber(amount)).toString(),
      //   gas: String(gas),
      // });

      const tokenIds = extractTokenIdsFromReceipt(temp_data);

      await fetchNftMetadata(tokenIds);

      setModalStage('minted');
    } catch (error) {
      console.error(error);
      message.error('Transaction failed');
    }
    setLoading(false);
  };

  const mintStage = () => (
    <Fragment>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 500,
          textAlign: 'center',
          color: colors.textContrast,
        }}>
        MINT AN NFT
      </Text>
      <Text style={{fontSize: 16, textAlign: 'center'}}>
        Join the Paladins Community!
      </Text>
      <Text
        style={{
          fontSize: 16,
          margin: '24px 0',
          textAlign: 'center',
          color: colors.textDescriptionOnBlack,
        }}>
        You are going to mint a NFT
      </Text>
      <Row
        justify={'space-between'}
        align={'middle'}
        style={{
          borderRadius: 10,
          padding: '8px 14px',
          border: `1px solid ${colors.btnPrimaryBorder}`,
        }}>
        <Col>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 'normal',
              fontFamily: 'DarkerGrotesque',
              userSelect: 'none',
              fontWeight: 600,
            }}>
            Amount
          </Text>
        </Col>
        <Col>
          <Row align={'middle'} style={{gap: 16}}>
            <MinusOutlined
              disabled={amount === 1}
              onClick={() => {
                if (amount >= 1) setAmount((prev) => prev - 1);
              }}
            />
            <Text
              style={{
                paddingBottom: 4,
                userSelect: 'none',
                fontSize: 24,
                lineHeight: 'normal',
                fontFamily: 'DarkerGrotesque',
                fontWeight: 600,
              }}>
              {amount}
            </Text>
            <PlusOutlined
              onClick={() => {
                if (amount < 3) setAmount((prev) => prev + 1);
              }}
            />
          </Row>
        </Col>
      </Row>
      <Row style={{marginTop: 18, padding: '0 14px'}} gutter={[0, 8]}>
        <Col span={24}>
          <Row justify={'space-between'} align={'middle'}>
            <Text
              style={{
                userSelect: 'none',
                fontSize: 18,
                lineHeight: 'normal',
                fontFamily: 'DarkerGrotesque',
                fontWeight: 800,
              }}>
              NFT Price
            </Text>
            <Text
              style={{
                userSelect: 'none',
                fontSize: 18,
                lineHeight: 'normal',
                fontFamily: 'DarkerGrotesque',
                fontWeight: 800,
              }}>
              {Web3.utils.fromWei(nftPrice.toString(), 'ether')} ETH
            </Text>
          </Row>
        </Col>
        <Col span={24}>
          {amount > 0 && (
            <Row justify={'space-between'} align={'middle'}>
              <Text
                style={{
                  userSelect: 'none',
                  fontSize: 18,
                  lineHeight: 'normal',
                  fontFamily: 'DarkerGrotesque',
                  fontWeight: 800,
                }}>
                Your Total
              </Text>
              <Text
                style={{
                  userSelect: 'none',
                  fontSize: 18,
                  lineHeight: 'normal',
                  fontFamily: 'DarkerGrotesque',
                  fontWeight: 800,
                }}>
                {Web3.utils.fromWei(
                  nftPrice.multipliedBy(BigNumber(amount)).toString(),
                  'ether',
                )}{' '}
                ETH
              </Text>
            </Row>
          )}
        </Col>
      </Row>
      <Row style={{marginTop: 30}} gutter={12}>
        <Col span={12}>
          <Button onClick={closeModal} block secondary size="large">
            Cancel
          </Button>
        </Col>
        <Col span={12}>
          <Button
            onClick={handleMintNft}
            block
            size="large"
            disabled={loading || amount < 1}>
            Mint
          </Button>
        </Col>
      </Row>
    </Fragment>
  );

  const mintingStage = () => (
    <Fragment>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 500,
          textAlign: 'center',
          color: colors.textContrast,
        }}>
        MINTING
      </Text>
      <Text
        style={{
          fontFamily: fontFamily.darkerGrotesque,
          fontSize: 20,
          margin: 6,
          textAlign: 'center',
          color: colors.textDescriptionOnBlack,
        }}>
        We are currently minting your NFT
      </Text>
      <Spin style={{margin: 34}} />
      <Text
        style={{
          fontFamily: fontFamily.darkerGrotesque,
          fontSize: 20,
          margin: 6,
          textAlign: 'center',
          color: colors.textDescriptionOnBlack,
        }}>
        Please be patient...
      </Text>
    </Fragment>
  );

  const mintedStage = (nfts: any) => (
    <Fragment>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 500,
          textAlign: 'center',
          color: colors.textContrast,
        }}>
        ALL DONE!
      </Text>
      {nfts.map((nft: any) => (
        <NftCard
          style={{width: 280, alignSelf: 'center', margin: '24px 0px'}}
          {...nft}
          owned
        />
      ))}

      <Row gutter={12}>
        <Col span={12}>
          <Button onClick={closeModal} block secondary size="large">
            Cancel
          </Button>
        </Col>
        <Col span={12}>
          <Button onClick={closeModal} block size="large">
            <Link
              to="/myaccount"
              style={{color: 'inherit', textDecoration: 'inherit'}}>
              VIEW YOUR NFTS
            </Link>
          </Button>
        </Col>
      </Row>
    </Fragment>
  );

  const renderStage = () => {
    switch (modalStage) {
      case 'mint':
        return mintStage();
      case 'minting':
        return mintingStage();
      case 'minted':
        return mintedStage(purchasedNFTs);
      default:
        return mintStage();
    }
  };

  if (nftData.isOpen)
    return (
      <AppModal open={nftData.isOpen} onCancel={closeModal}>
        {renderStage()}
      </AppModal>
    );
};

export default MintNftModal;
