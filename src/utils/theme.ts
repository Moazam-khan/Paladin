import {ThemeConfig} from 'antd';

export const colors = {
  primary: '#FFCB3A',
  secondary: '#354DFE',
  secondary90: '#354DFEEE',
  white: '#ffffff',
  white50: '#FFFFFF80',
  white20: '#FFFFFF33',
};

export const theme: ThemeConfig = {
  components: {
    Typography: {
      colorText: 'white',
    },
    Button: {
      colorPrimary: 'transparent',
      colorPrimaryHover: 'transparent',
      borderRadius: 0,
    },
  },
  token: {
    fontFamily: 'Nippo',
    colorText: colors.white,
  },
};
