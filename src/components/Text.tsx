import {Typography} from 'antd';
import {TextProps} from 'antd/es/typography/Text';

const {Text: AntdText} = Typography;
const Text = (props: TextProps) => <AntdText {...props} />;

export default Text;
