import {IconComponent} from '@/shared/types/IconComponent.types';
import Svg, {Path} from 'react-native-svg';

export const ArrowBottomIcon: IconComponent = ({color, ...props}) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      fill={color}
      fillOpacity={0.4}
      d="M10.773 3.97a.75.75 0 0 0-1.06 0L6 7.682 2.288 3.97a.75.75 0 0 0-1.06 1.06L5.47 9.273a.75.75 0 0 0 1.06 0l4.243-4.243a.75.75 0 0 0 0-1.06Z"
    />
  </Svg>
);
