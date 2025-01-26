import {IconComponent} from '../../types/IconComponent.types';
import Svg, {G, Path} from 'react-native-svg';

export const LocationMarkIcon: IconComponent = ({color, ...props}) => {
  return (
    <Svg width={12} height={17} fill="none" {...props}>
      <G clipPath="url(#clip0_609_435)">
        <Path
          fill={color}
          d="M6 0C2.68286 0 0 2.6605 0 5.95C0 10.4125 6 17 6 17C6 17 12 10.4125 12 5.95C12 2.6605 9.31714 0 6 0ZM6 8.075C5.43168 8.075 4.88664 7.85112 4.48477 7.4526C4.08291 7.05409 3.85714 6.51359 3.85714 5.95C3.85714 5.38642 4.08291 4.84591 4.48477 4.4474C4.88664 4.04888 5.43168 3.825 6 3.825C6.56832 3.825 7.11337 4.04888 7.51523 4.4474C7.91709 4.84591 8.14286 5.38642 8.14286 5.95C8.14286 6.51359 7.91709 7.05409 7.51523 7.4526C7.11337 7.85112 6.56832 8.075 6 8.075V8.075Z"
        />
      </G>
    </Svg>
  );
};
