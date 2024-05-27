import {ThemeConfig} from 'antd';

export const colors = {
  primary: '#1890ff',
  white: '#ffffff',
};

export const theme: ThemeConfig = {
  components: {
    Typography: {
      colorText: 'white',
    },
  },
  token: {
    fontFamily: 'Arial',
    colorText: colors.white,
  },
};
