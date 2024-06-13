import {colors, fontFamily} from '@/utils';
import Button from './Button';
import Text from './Text';

type Props = NFT &
  React.HTMLAttributes<HTMLDivElement> & {
    owned?: boolean;
  };

const NftCard = ({
  owned,
  identifier,
  updated_at,
  image_url,
  name,
  collection,
  token_standard,
  style,
  ...rest
}: Props) => {
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
        src={image_url}
        width={'100%'}
        style={{
          aspectRatio: 1,
          maxHeight: 290,
          objectFit: 'cover',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
        alt={name}
      />
      <div
        style={{
          margin: '0 24px',
          padding: '16px 0',
          borderBottom: owned ? 'unset' : '1px solid #FFFFFF33',
        }}>
        <Text
          className="clamp-2-lines"
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: colors.primary,
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontFamily: fontFamily.darkerGrotesque,
            color: colors.white50,
            fontWeight: 600,
            display: 'block',
          }}>
          {/*  @ts-ignore */}
          {/* {format(updated_at, "dd/MM/yyyy hh:mm a")} */}
        </Text>
        <Text
          style={{
            fontFamily: fontFamily.darkerGrotesque,
            color: colors.white50,
            fontWeight: 600,
            display: 'block',
          }}>
          #{collection}
        </Text>
        {!owned && (
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
                fontFamily: fontFamily.darkerGrotesque,
                fontWeight: 600,
              }}>
              2 PAL
            </Text>
          </div>
        )}
      </div>

      {!owned && (
        <div
          style={{
            paddingTop: 16,
            margin: '0 24px',
            paddingBottom: 16,
          }}>
          <Button secondary style={{width: '100%'}}>
            BUY NFT
          </Button>
        </div>
      )}
    </div>
  );
};

export default NftCard;
