import {ITypography} from '@/types/fonts';
import {colors, fontFamily} from '@/utils';
import {Typography} from 'antd';
import {TextProps} from 'antd/es/typography/Text';

type Props = TextProps & ITypography;

const {Text: AntdText} = Typography;
const Text = ({
  ff = 'nippo',
  fs,
  fw = 400,
  color,
  center,
  style,
  ...props
}: Props) => (
  <AntdText
    style={{
      fontFamily: fontFamily[ff] || fontFamily.nippo,
      fontSize: fs || style?.fontSize || 16,
      fontWeight: fw,
      color: color ? colors[color] || color : colors.white,
      textAlign: center ? 'center' : style?.textAlign || 'left',
      ...style,
    }}
    {...props}
  />
);

export default Text;
