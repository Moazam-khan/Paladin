import {colors, fontFamily} from '@/utils';
import {Flex, InputNumber} from 'antd';
import Button from '../Button';
import Text from '../Text';

type DepositCardProps = {
  ethAmount: number;
  setEthAmount: (amount: number) => void;
  handleDeposit: () => void;
  isLoading: boolean;
  isPending: boolean;
};

const DepositCard = ({
  ethAmount,
  setEthAmount,
  handleDeposit,
  isLoading,
  isPending,
}: DepositCardProps) => {
  return (
    <Flex
      style={{
        borderRadius: 24,
        border: `1px solid ${colors.btnPrimaryBorder}`,
        background: colors.btnPrimaryBg,
        boxShadow: '0px 1.737px 5.211px 0px rgba(0, 0, 0, 0.15)',
        padding: 24,
        flexDirection: 'column',
        gap: 20,
        height: '100%',
      }}>
      <Text
        center
        ff="nippo"
        fs={28}
        fw={500}
        style={{letterSpacing: '1.68px'}}>
        DEPOSIT FOR <span style={{color: colors.textContrast}}>$CYBER</span>
      </Text>
      <Text
        ff="darkerGrotesque"
        fw={600}
        color="textDescriptionOnBlack"
        fs={20}>
        Deposit an amount of ETH between 0.05 and 2.0 and get $CYBER in return!
      </Text>
      <Flex style={{flexDirection: 'column'}}>
        <Text
          ff="darkerGrotesque"
          fw={600}
          fs={18}
          color="textDescriptionOnBlack">
          Deposit ETH
        </Text>
        <InputNumber
          className="fix-font"
          style={{
            width: '100%',
            fontFamily: fontFamily.darkerGrotesque,
            fontWeight: 600,
            lineHeight: '100%',
          }}
          controls={false}
          placeholder="Enter an amount"
          value={ethAmount}
          onChange={(e) => {
            //@ts-ignore
            setEthAmount(e);
          }}
          suffix="ETH"
          disabled={isPending}
        />
        {/* <Input type="number" /> */}
        <Button
          size="large"
          style={{
            alignSelf: 'flex-end',
            width: 227,
            marginTop: 18,
          }}
          onClick={handleDeposit}
          loading={isLoading}
          disabled={isPending}>
          Deposit
        </Button>
      </Flex>
    </Flex>
  );
};

export default DepositCard;
