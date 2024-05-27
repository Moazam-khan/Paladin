import {Button as AntdBtn, ButtonProps} from 'antd';

const Button = ({children, ...rest}: ButtonProps) => {
  return (
    <AntdBtn type={'primary'} {...rest}>
      {children}
    </AntdBtn>
  );
};

export default Button;
