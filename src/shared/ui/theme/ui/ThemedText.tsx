import {FC} from 'react';
import {Text, TextProps} from 'react-native';
import {ColorName, Theme} from '../../../consts/colors';
import {useThemeColors} from '../../../hooks/useThemeColors';

type PropTypes = TextProps & {
  defaultTheme?: Theme;
  colorName?: ColorName;
};

export const ThemedText: FC<PropTypes> = ({
  defaultTheme,
  colorName,
  style,
  children,
}) => {
  const {colors} = useThemeColors(defaultTheme);
  return (
    <Text style={[{color: colors[colorName || 'text']}, style]}>
      {children}
    </Text>
  );
};
