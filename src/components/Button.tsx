import {Button as AntdBtn, ButtonProps} from 'antd';

interface BtnProps extends ButtonProps {
  secondary?: boolean;
}

const Button = ({
  children,
  className,
  secondary,
  disabled,
  ...rest
}: BtnProps) => {
  return (
    <AntdBtn
      className={`btn-clip ${
        secondary ? 'btn-bg-secondary' : 'btn-bg-primary'
      } ${className}`}
      type={'primary'}
      disabled={disabled}
      {...rest}>
      <span
        style={{
          position: 'relative',
          bottom: rest.size === 'large' ? 0 : '2.4px',
          opacity: disabled ? '0.3' : '',
        }}>
        {children}
      </span>
    </AntdBtn>
  );
};

export default Button;
