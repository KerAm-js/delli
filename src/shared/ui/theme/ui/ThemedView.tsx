import {FC} from 'react';
import {View, ViewProps} from 'react-native';
import {
  ThemedContianerPropTypes,
  useThemedContainerStyles,
} from '../lib/useThemedContainerStyles';

type PropTypes = ViewProps & ThemedContianerPropTypes;

export const ThemedView: FC<PropTypes> = props => {
  const themedStyles = useThemedContainerStyles(props);
  return (
    <View {...props} style={themedStyles}>
      {props.children}
    </View>
  );
};
