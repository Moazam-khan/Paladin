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
import {Carousel, Col, Flex, Row, Spin, message} from 'antd';
import BigNumber from 'bignumber.js';
import {Fragment, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAccount} from 'wagmi';
import Web3 from 'web3';
import mintAbi from '../../abis/mintAbi.json';
import paladinsAbi from '../../abis/paladins.json';
import Button from '../Button';
import NftCard from '../NftCard';
import Text from '../Text';
import AppModal from './AppModal';

type Props = {};

const MintNftModal = (props: Props) => {
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const nftData = useSelector().buyNftModalData;
  const setBuyNftModal = useSelector().setBuyNftModal;
  const [modalStage, setModalStage] = useState<'mint' | 'minting' | 'minted'>(
    'mint',
  );
  const [activeSlide, setActiveSlide] = useState(0);
  const [purchasedNFTs, setPurchasedNFTs] = useState<any>([]);

  const [nftPrice, setNFTPrice] = useState<BigNumber>(
    BigNumber('20000000000000000'),
  );
  const {address, connector} = useAccount();
  const navigate = useNavigate();

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
      const web3 = new Web3((await connector?.getProvider()) || '');
      const contract = new web3.eth.Contract(mintAbi, MINT_CONTRACT_ADDRESS);

      const price: string = await contract.methods.price().call();

      const gas: bigint = await contract.methods.buy(amount).estimateGas({
        from: address,
        value: BigNumber(price).multipliedBy(BigNumber(amount)).toString(),
      });

      const tx = await contract.methods.buy(amount).send({
        from: address,
        value: BigNumber(price).multipliedBy(BigNumber(amount)).toString(),
        gas: String(gas),
      });

      const tokenIds = extractTokenIdsFromReceipt(tx);

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
      <Carousel
        draggable={true}
        dots={true}
        rootClassName="carousel-nft-mint"
        afterChange={(e) => {
          setActiveSlide(e);
        }}>
        {nfts.map((nft: any) => (
          <div>
            <NftCard
              style={{
                maxWidth: 280,
                marginBottom: 36,
                marginTop: 24,
                marginLeft: 6,
                marginRight: 6,
              }}
              {...nft}
              owned
            />
          </div>
        ))}
      </Carousel>

      <Flex gap={10} style={{justifyContent: 'center'}}>
        <Button
          style={{maxWidth: 172}}
          onClick={closeModal}
          block
          secondary
          size="large">
          Cancel
        </Button>

        <Button
          style={{maxWidth: 172}}
          onClick={() => {
            navigate('/myaccount');
            closeModal();
          }}
          block
          size="large">
          VIEW YOUR NFTS
        </Button>
      </Flex>
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
      <AppModal width={440} open={nftData.isOpen} onCancel={closeModal}>
        {renderStage()}
      </AppModal>
    );
};

export default MintNftModal;
