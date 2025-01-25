import {FC} from 'react';
import { SvgProps } from 'react-native-svg';

export type IconComponentProps = {color?: string} & SvgProps
export type IconComponent = FC<IconComponentProps>;
