import {getUserNfts} from '@/api/ApiCalls/nfts';
import {MyAccountHeader, Text} from '@/components';
import Button from '@/components/Button';
import NftCard from '@/components/NftCard';
import {useBreakpoint, useLogin} from '@/hooks';
import {commonStyles} from '@/styles';
import {fontFamily} from '@/utils';
import {usePrivy} from '@privy-io/react-auth';
import {Col, Row, Spin} from 'antd';
import {useEffect, useState} from 'react';
import {useAccount} from 'wagmi';
type Props = {};

const MyAccount = (props: Props) => {
  const {address} = useAccount();
  const {sm, md, lg} = useBreakpoint();
  const [userNfts, setUserNfts] = useState<Array<NFT>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const {handleLogin} = useLogin();
  const {ready, authenticated, linkWallet, user} = usePrivy();

  const getNfts = async () => {
    try {
      if (address || user?.wallet?.address) {
        setIsLoading(true);
        const res = await getUserNfts(
          user?.wallet?.address ? user.wallet.address : address ? address : '',
          'sepolia',
          'paladins-erc404-1',
        );
        console.log(res);
        setUserNfts(res.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNfts();
  }, [address]);

  if (!authenticated)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 400,
        }}>
        <Button
          className="text-tail-end"
          disabled={!ready}
          onClick={!address && authenticated ? linkWallet : handleLogin}
          loading={!ready}>
          Click to connect your wallet
        </Button>
      </div>
    );

  return (
    <Row
      style={{
        margin: md ? 24 : '24px 12px 24px 12px',
      }}>
      <Col span={24}>
        <MyAccountHeader />
      </Col>
      <Col
        span={24}
        style={{
          ...commonStyles.card,
          marginTop: 24,
        }}>
        <Col span={24}>
          <Text
            style={{
              fontFamily: fontFamily.spaceGrotesk,
              fontSize: 28,
              fontWeight: 700,
              textTransform: 'uppercase',
            }}>
            My NFTs
          </Text>
        </Col>
        <Col span={24} style={{marginTop: 24}}>
          {isLoading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 400,
              }}>
              <Spin />
            </div>
          ) : (
            <Row gutter={[24, 24]}>
              {userNfts.map((gem: NFT, index) => (
                <Col xs={24} md={8} lg={6}>
                  <NftCard
                    owned
                    key={index}
                    style={
                      {
                        // maxWidth: 289,
                        // width: '20%',
                        // minWidth: 200,
                      }
                    }
                    {...gem}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Col>
    </Row>
  );
};

export default MyAccount;
