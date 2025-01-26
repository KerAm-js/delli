import {FC} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {
  ThemedContianerPropTypes,
  useThemedContainerStyles,
} from '../lib/useThemedContainerStyles';

type PropTypes = TouchableOpacityProps & ThemedContianerPropTypes;

export const ThemedTouchableOpacity: FC<PropTypes> = props => {
  const themedStyles = useThemedContainerStyles(props);
  return (
    <TouchableOpacity {...props} style={themedStyles}>
      {props.children}
    </TouchableOpacity>
  );
};
