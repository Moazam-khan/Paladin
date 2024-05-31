import { colors } from '@/utils';
import Button from './Button';
import Text from './Text';

type Props = {
  title: string;
  date: Date;
  tag: string;
  price: number;
  img: string;
} & React.HTMLAttributes<HTMLDivElement>;

const NftCard = ({ title, date, tag, price, img, style, ...rest }: Props) => {
  return (
    <div
      style={{
        borderRadius: 8,
        height: '100%',
        border: `1px solid ${colors.white20}`,
        background: 'rgba(255, 255, 255, 0.06)',
        boxShadow: '0px 1.737px 5.211px 0px rgba(0, 0, 0, 0.15)',
        ...style,
      }}
      {...rest}>
      <img
        src={img}
        width={'100%'}
        style={{ aspectRatio: 1, maxHeight: 290, objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        alt={title}
      />
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
        <Button secondary style={{ width: '100%' }}>
          BUY NFT
        </Button>
      </div>
    </div>
  );
};

export default NftCard;
