import {IconComponent} from '../../types/IconComponent.types';
import Svg, {G, Path} from 'react-native-svg';

export const LocationMarkIcon: IconComponent = ({color, ...props}) => {
  return (
    <Svg width={15} height={21} fill="none" {...props}>
      <G clipPath="url(#clip0_609_435)">
        <Path
          fill={color}
          d="M7.5 0C3.354 0 0 3.287 0 7.35 0 12.863 7.5 21 7.5 21S15 12.863 15 7.35C15 3.287 11.646 0 7.5 0Zm0 9.975c-.71 0-1.392-.277-1.894-.769a2.599 2.599 0 0 1-.785-1.856c0-.696.283-1.364.785-1.856A2.707 2.707 0 0 1 7.5 4.725c.71 0 1.392.277 1.894.769s.785 1.16.785 1.856c0 .696-.283 1.364-.785 1.856a2.707 2.707 0 0 1-1.894.769Z"
        />
      </G>
    </Svg>
  );
};
