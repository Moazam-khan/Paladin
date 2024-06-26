import {colors, fontFamily} from '@/utils';

declare interface ITypography {
  ff?: keyof typeof fontFamily;
  fs?: number;
  fw?: number;
  color?: keyof typeof colors;
  center?: boolean;
}
