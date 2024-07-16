import {useBreakpoint} from '@/hooks';
import {CaretDownOutlined} from '@ant-design/icons';
import {Col, Dropdown, Menu, Row} from 'antd';
import {useState} from 'react';
import line from '../../assets/Line10.png';
import frampic from '../../assets/PictureFrame.png';
import info from '../../assets/info-circle.png';
import tag from '../../assets/tag.png';
import Text from '../Text';

interface NftData {
  name: string;
  value: string;
  icon: string;
}
const nftData: NftData[] = [
  {
    name: 'PALADINS #38916',
    value: '1 $PAL',
    icon: frampic,
  },
  {
    name: 'PALADINS #38917',
    value: '1 $PAL',
    icon: frampic,
  },
  {
    name: 'PALADINS #38918',
    value: '1 $PAL',
    icon: frampic,
  },
];

const SelectNFT = () => {
  const [selected, setSelected] = useState<NftData | null>(null);
  const {sm, md, lg, xl} = useBreakpoint();

  const items = nftData.map((nft, index) => {
    return {
      label: (
        <Row
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: '6px 0px',
          }}
          onClick={() => setSelected(nft)}>
          <Col style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
            <img
              src={nft.icon}
              alt={nft.name}
              style={{height: '36px', width: '36px', borderRadius: '8px'}}
            />
            <Text fs={18} fw={500} ff="darkerGrotesque">
              {nft.name}
            </Text>
          </Col>
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '4px 18px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.10)',
            }}>
            <Text
              fs={16}
              fw={600}
              ff="darkerGrotesque"
              style={{
                color: '#FFCB3A',
              }}>
              {nft.value}
            </Text>
          </Col>
        </Row>
      ),
      key: index.toString(), // Set the key to the index
    };
  });

  const menu = <Menu items={items} />;

  return (
    <Row>
      <Col
        span={24}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          marginTop: '16px',
        }}>
        <Text
          fs={14}
          fw={600}
          ff={'darkerGrotesque'}
          style={{color: '#7D7D7D'}}>
          Select NFT
        </Text>
        <img src={info} style={{height: '14px', width: '14px'}} />
      </Col>
      <Dropdown overlay={menu} trigger={['click']} placement="bottom">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '12px',
            cursor: 'pointer',
            gap: '6px',
            width: '100%',
            backgroundColor: '#262626',
            padding: '8px 12px',
            border: '1px solid #525252',
            justifyContent: 'space-between',
          }}>
          <Text fs={18} fw={400} ff="nippo">
            {selected ? selected.name : 'Select'}
          </Text>
          <CaretDownOutlined />
        </div>
      </Dropdown>
      {selected && (
        <Row
          style={{
            width: '100%',
            marginTop: '12px',
            padding: '16px',
            borderRadius: '18px',
            border: '1px solid rgba(255, 255, 255, 0.10)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            justifyContent: 'space-between',
            gap: '24px',
            flexDirection: sm ? 'row' : 'column',
          }}>
          <Col
            style={{
              display: 'flex',
              gap: '24px',
              flexDirection: sm ? 'row' : 'column',
            }}>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <img
                src={selected ? selected.icon : ''}
                style={{
                  height: sm ? '111px' : '250px',
                  width: sm ? '109px' : '291px',
                  borderRadius: '7px',
                }}
              />
            </Row>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '20px',
              }}>
              <Text fs={16} fw={400} style={{color: '#FFCB3A'}}>
                {selected?.name}
              </Text>
              <div
                style={{
                  padding: '4px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  maxWidth: '178px',
                }}>
                <Text
                  fs={14}
                  fw={600}
                  ff="darkerGrotesque"
                  style={{color: 'rgba(255, 255, 255, 0.50)'}}>
                  Token Holdings
                </Text>
                <img src={line} />
                <Text
                  fs={16}
                  fw={600}
                  ff="darkerGrotesque"
                  style={{color: '#FFCB3A'}}>
                  {selected?.value}
                </Text>
              </div>
            </div>
          </Col>
          <img src={tag} style={{height: '24px', width: '24px'}} />
        </Row>
      )}
    </Row>
  );
};

export default SelectNFT;
