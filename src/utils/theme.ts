import {ThemeConfig} from 'antd';

export const fontFamily = {
  nippo: 'Nippo',
  darkerGrotesque: 'DarkerGrotesque',
  spaceGrotesk: 'SpaceGrotesk',
};

export const colors = {
  primary: '#FFCB3A',
  secondary: '#354DFE',
  secondary90: '#354DFEEE',
  gray: '#2D2D2D',
  white: '#ffffff',
  white50: 'rgba(255, 255, 255, 0.50)',
  white20: 'rgba(255, 255, 255, 0.20)',
  white15: 'rgba(255, 255, 255, 0.15)',
  white13: 'rgba(255, 255, 255, 0.13)',
  white10: 'rgba(255, 255, 255, 0.10)',
  white5: 'rgba(255, 255, 255, 0.05)',
  black15: 'rgba(0, 0, 0, 0.15)',

  light50: '#FFFFFF0D',
  light200: '#FFFFFF26',
  textContrast: '#FFCB3A',
  textDescriptionOnBlack: '#7D7D7D',
  btnPrimaryBorder: '#525252',
  btnPrimaryBg: '#262626',
};

export const theme: ThemeConfig = {
  components: {
    Dropdown: {
      colorBgElevated: '#171717',
    },
    Typography: {
      colorText: 'white',
    },
    Button: {
      colorPrimary: 'transparent',
      colorPrimaryHover: 'transparent',
      borderRadius: 0,
      colorTextDisabled: 'White',
    },
    Spin: {
      colorPrimary: colors.primary,
    },
    Modal: {
      contentBg: colors.btnPrimaryBg,
    },
    Input: {
      colorTextPlaceholder: colors.textDescriptionOnBlack,
      colorBgContainer: 'transparent',
      borderRadius: 12,
      colorPrimary: colors.btnPrimaryBorder,
      hoverBorderColor: colors.btnPrimaryBorder,
      colorBorder: colors.btnPrimaryBorder,
      colorText: colors.white,
      //typography
      fontFamily: fontFamily.darkerGrotesque,
      fontSize: 20,
      inputFontSize: 20,
      activeShadow: 'none',
      paddingBlock: 8,
      paddingInline: 14,
    },
    InputNumber: {
      colorTextPlaceholder: colors.textDescriptionOnBlack,
      colorBgContainer: 'transparent',
      borderRadius: 12,
      colorPrimary: colors.btnPrimaryBorder,
      hoverBorderColor: colors.btnPrimaryBorder,
      colorBorder: colors.btnPrimaryBorder,
      colorText: colors.white,
      //typography
      fontFamily: fontFamily.darkerGrotesque,
      fontSize: 20,
      inputFontSize: 20,
      activeShadow: 'none',
      paddingBlock: 8,
      paddingInline: 14,
    },
  },
  token: {
    fontFamily: 'Nippo',
    colorText: colors.white,
  },
};
