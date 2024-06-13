import {useBreakpoint} from '@/hooks';
import {colors} from '@/utils';
import {Modal, ModalProps} from 'antd';

type Props = {} & ModalProps;

const AppModal = ({style, styles, ...props}: Props) => {
  const {xs, lg} = useBreakpoint();
  return (
    <Modal
      centered
      title={null}
      footer={null}
      closeIcon={null}
      styles={{
        body: {
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          ...styles?.body,
        },
        content: {
          border: `0.85px solid ${colors.btnPrimaryBorder}`,
          borderRadius: 24,
          boxShadow: '0px 1.737px 5.211px 0px rgba(0, 0, 0, 0.15)',
          padding: xs ? 16 : lg ? 36 : 24,
          ...styles?.content,
        },
        mask: {
          backdropFilter: 'blur(4px)',
          backgroundColor: '#000000BF',
          ...styles?.mask,
        },
      }}
      {...props}
    />
  );
};

export default AppModal;
