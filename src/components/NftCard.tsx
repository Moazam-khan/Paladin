import {colors} from '@/utils';
import Button from './Button';
import Text from './Text';

type Props = {
  title: string;
  date: Date;
  tag: string;
  price: number;
  img: string;
};

const NftCard = ({title, date, tag, price, img}: Props) => {
  return (
    <div
      style={{
        border: '1px solid #FFFFFF33',
      }}>
      <img src={img} height={289} alt={title} />
      <div
        style={{
          margin: '0 24px',
          padding: '16px 0',
          borderBottom: '1px solid #FFFFFF33',
        }}>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: colors.primary,
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontFamily: 'DarkerGrotesque',
            color: colors.white50,
            fontWeight: 600,
            display: 'block',
          }}>
          {date.toDateString()}
        </Text>
        <Text
          style={{
            fontFamily: 'DarkerGrotesque',
            color: colors.white50,
            fontWeight: 600,
            display: 'block',
          }}>
          #{tag}
        </Text>
        <div
          style={{
            padding: 8,
            backgroundColor: '#FFFFFF1A',
            borderRadius: 8,
            marginTop: 10,
            width: 'fit-content',
          }}>
          <Text
            style={{
              fontFamily: 'DarkerGrotesque',
              fontWeight: 600,
            }}>
            {price} PAL
          </Text>
        </div>
      </div>

      <div
        style={{
          paddingTop: 16,
          margin: '0 24px',
          paddingBottom: 16,
        }}>
        <Button style={{width: '100%', backgroundColor: '#FFFFFF1A'}}>
          BUY NFT
        </Button>
      </div>
    </div>
  );
};

export default NftCard;
