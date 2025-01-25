import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const SCREEN_PADDING_HORIZONTAL = width > 390 ? 20 : 15;
