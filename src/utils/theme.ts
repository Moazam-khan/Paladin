import { ThemeConfig } from 'antd';

export const colors = {
  primary: '#FFCB3A',
  secondary: '#354DFE',
  secondary90: '#354DFEEE',
  white: '#ffffff',
  white50: 'rgba(255, 255, 255, 0.50)',
  white20: 'rgba(255, 255, 255, 0.20)',
  white15: 'rgba(255, 255, 255, 0.15)',
  white10: 'rgba(255, 255, 255, 0.10)',
  white5: 'rgba(255, 255, 255, 0.05)',
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
