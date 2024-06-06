import {getUserNfts} from '@/api/ApiCalls/nfts';
import add from '@/assets/Add.png';
import {Text} from '@/components';
import Button from '@/components/Button';
import NftCard from '@/components/NftCard';
import {useLogin} from '@/hooks';
import {colors} from '@/utils';
import {usePrivy} from '@privy-io/react-auth';
import {Col, Row, Spin} from 'antd';
import {useEffect, useState} from 'react';
import {useAccount} from 'wagmi';

type Props = {};

const MyAccount = (props: Props) => {
  const {address} = useAccount();
  const [userNfts, setUserNfts] = useState<Array<NFT>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const {handleLogin} = useLogin();
  const {ready, authenticated} = usePrivy();

  const getNfts = async () => {
    try {
      if (address) {
        setIsLoading(true);
        const res = await getUserNfts(address, 'sepolia', 'test-14117');
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

  if (!address || !authenticated)
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
          onClick={handleLogin}
          loading={!ready}>
          Click to connect your wallet
        </Button>
      </div>
    );

  return (
    <Row
      style={{
        margin: 24,
      }}>
      <Col span={24}>
        <Text
          style={{
            fontFamily: 'SpaceGrotesk',
            fontSize: 28,
            fontWeight: 700,
            textTransform: 'uppercase',
          }}>
          My NFTs
        </Text>
        <Text
          style={{
            fontFamily: 'DarkerGrotesque',
            fontSize: 20,
            fontWeight: 600,
            display: 'block',
            color: colors.white50,
          }}>
          Each Piece Tells a Story.
        </Text>
      </Col>
      <Col span={24} style={{marginTop: 36}}>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={16} md={20}>
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
          <Col xs={24} sm={8} md={4}>
            <div
              style={{
                maxWidth: 200,
                backdropFilter: 'blur(2px)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 16,
                border: `1px solid ${colors.white20}`,
                borderRadius: 8,
                textAlign: 'center',
                gap: 14,
              }}>
              <img src={add} style={{height: 44}} />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  letterSpacing: 1.8,
                  textTransform: 'uppercase',
                }}>
                Mint more
              </Text>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MyAccount;
