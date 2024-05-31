import { Button as AntdBtn, ButtonProps } from 'antd';

interface BtnProps extends ButtonProps {
  secondary?: boolean;
}

const Button = ({ children, className, secondary, ...rest }: BtnProps) => {
  return (
    <AntdBtn
      className={`btn-clip ${
        secondary ? 'btn-bg-secondary' : 'btn-bg-primary'
      } ${className}`}
      type={'primary'}
      {...rest}>
      <span
        style={{
          position: 'relative',
          bottom: rest.size === 'large' ? 0 : '2.4px',
        }}>
        {children}
      </span>
    </AntdBtn>
  );
};

export default Button;
