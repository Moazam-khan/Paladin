import {colors} from '@/utils';
import {Flex} from 'antd';
import React from 'react';
import Text from '../Text';

type Props = {};

const Pin = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="31"
      viewBox="0 0 12 31"
      fill="none">
      <path
        d="M6 0.920329C3.05448 0.920328 0.666667 3.30814 0.666667 6.25366C0.666666 9.19918 3.05448 11.587 6 11.587C8.94552 11.587 11.3333 9.19918 11.3333 6.25366C11.3333 3.30814 8.94552 0.920329 6 0.920329ZM5 29.2537C5 29.8059 5.44771 30.2537 6 30.2537C6.55228 30.2537 7 29.8059 7 29.2537L5 29.2537ZM5 6.25366L5 29.2537L7 29.2537L7 6.25366L5 6.25366Z"
        fill="#FFCB3A"
      />
    </svg>
    <Text style={{position: 'absolute', width: 60, bottom: -32, left: -15}}>
      0 ETH
    </Text>
  </div>
);

const PreSaleProgressBar = (props: Props) => {
  return (
    <div style={{minHeight: 80}}>
      <Flex style={{marginBottom: 8, paddingLeft: '2%'}}>
        <Text
          ff="darkerGrotesque"
          color="textDescriptionOnBlack"
          center
          fw={600}
          style={{flex: 0.7}}>
          Public Hard Cap
        </Text>
        <Text
          ff="darkerGrotesque"
          fw={600}
          color="textDescriptionOnBlack"
          center
          style={{flex: 0.3}}>
          Overflow
        </Text>
      </Flex>
      <div
        style={{
          position: 'relative',
          backgroundColor: colors.light200,
          height: 12,
          borderRadius: 36,
        }}>
        <div
          style={{
            width: '50%',
            height: '102%',
            backgroundColor: colors.primary,
            position: 'absolute',
            borderRadius: 36,
          }}
        />
        <Pin style={{position: 'absolute', bottom: -8, left: '2%'}} />
        <Pin style={{position: 'absolute', left: '75%', bottom: -8}} />
        <Pin style={{position: 'absolute', left: '95%', bottom: -8}} />

        {/* <Flex style={{position: 'relative', top: '20px'}}>
        <Text style={{marginLeft: '2%'}}>0 ETH</Text>
        <Text style={{marginLeft: '60%'}}>20 ETH</Text>
        <Text style={{marginLeft: '10%'}}>30 ETH</Text>
      </Flex> */}
      </div>
    </div>
  );
};

export default PreSaleProgressBar;
