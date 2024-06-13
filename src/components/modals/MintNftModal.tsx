import {useSelector} from '@/store';
import {colors, fontFamily} from '@/utils';
import {MinusOutlined, PlusOutlined} from '@ant-design/icons';
import {Col, Row, Spin} from 'antd';
import {Fragment, useEffect, useState} from 'react';
import Button from '../Button';
import NftCard from '../NftCard';
import Text from '../Text';
import AppModal from './AppModal';

type Props = {};

const dummyNft = {
  identifier:
    '57896044618658097711785492504343953926634992332820282019728792003956564819972',
  collection: 'test-14117',
  contract: '0x8f23881865847b28b5dcda915ce4d6d44fc51769',
  token_standard: 'erc721',
  name: 'test #57896044618658097711785492504343953926634992332820282019728792003956564819972',
  description: '',
  image_url:
    'https://ipfs.io/ipfs/QmchCoVt9xNsHJ33ywHwZuNUWfmdvjbK61F2uNAMMSrTN8',
  metadata_url:
    'data:application/json;utf8,{"name":"test #57896044618658097711785492504343953926634992332820282019728792003956564819972","description":"","external_url":"https://net2dev.io","image":"ipfs://QmchCoVt9xNsHJ33ywHwZuNUWfmdvjbK61F2uNAMMSrTN8","attributes":[{"trait_type":"Color","value":"Mr Bean 1"}]}',
  opensea_url:
    'https://testnets.opensea.io/assets/sepolia/0x8f23881865847b28b5dcda915ce4d6d44fc51769/57896044618658097711785492504343953926634992332820282019728792003956564819972',
  updated_at: '2024-05-22T17:57:30.064745',
  is_disabled: false,
  is_nsfw: false,
};

const MintNftModal = (props: Props) => {
  const [amount, setAmount] = useState<number>(0);
  const nftData = useSelector().buyNftModalData;
  const setBuyNftModal = useSelector().setBuyNftModal;
  const [modalStage, setModalStage] = useState<'mint' | 'minting' | 'minted'>(
    'mint',
  );

  console.log(nftData);

  const closeModal = () => {
    setBuyNftModal({isOpen: false});
    setModalStage('mint');
    setAmount(0);
  };

  const handleMintNft = () => {
    setModalStage('minting');
    console.log('Mint NFT', nftData?.address);
  };

  useEffect(() => {
    if (modalStage === 'minting') {
      setTimeout(() => {
        setModalStage('minted');
      }, 2500);
    }
  }, [modalStage]);

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
            <PlusOutlined onClick={() => setAmount((prev) => prev + 1)} />
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
              0.03 ETH
            </Text>
          </Row>
        </Col>
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
              0.06 ETH
            </Text>
          </Row>
        </Col>
      </Row>
      <Row style={{marginTop: 30}} gutter={12}>
        <Col span={12}>
          <Button onClick={closeModal} block secondary size="large">
            Cancel
          </Button>
        </Col>
        <Col span={12}>
          <Button onClick={handleMintNft} block size="large">
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

  const mintedStage = () => (
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
      <NftCard
        style={{width: 280, alignSelf: 'center', margin: '24px 0px'}}
        {...dummyNft}
        owned
      />
      <Row gutter={12}>
        <Col span={12}>
          <Button onClick={closeModal} block secondary size="large">
            Cancel
          </Button>
        </Col>
        <Col span={12}>
          <Button onClick={closeModal} block size="large">
            VIEW YOUR NFTS
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
        return mintedStage();
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
