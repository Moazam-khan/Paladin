import {ThemeConfig} from 'antd';

export const colors = {
  primary: '#FFCB3A',
  secondary: '#354DFE',
  secondary90: '#354DFEEE',
  gray: '#2D2D2D',
  white: '#ffffff',
  white50: 'rgba(255, 255, 255, 0.50)',
  white20: 'rgba(255, 255, 255, 0.20)',
  white15: 'rgba(255, 255, 255, 0.15)',
  white10: 'rgba(255, 255, 255, 0.10)',
  white5: 'rgba(255, 255, 255, 0.05)',
  black15: 'rgba(0, 0, 0, 0.15)',
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
    Spin: {
      colorPrimary: colors.primary,
    },
  },
  token: {
    fontFamily: 'Nippo',
    colorText: colors.white,
  },
};
