import {FC} from 'react';
import {View, ViewProps} from 'react-native';
import {ColorName} from '../../consts/colors';
import {useThemeColors} from '../../hooks/useThemeColors';

type PropTypes = ViewProps & {
  colorName: ColorName;
  darkThemeColorName?: ColorName;
  darkThemeStyle?: ViewProps['style'];
  borderColorName?: ColorName;
};

export const ThemedView: FC<PropTypes> = ({
  colorName,
  borderColorName,
  darkThemeColorName,
  style,
  darkThemeStyle,
  children,
}) => {
  const {theme, colors} = useThemeColors();
  const finalColorName =
    theme === 'dark' ? darkThemeColorName || colorName : colorName;

  const styles = [
    style,
    {
      backgroundColor: colors[finalColorName],
      borderColor: borderColorName && colors[borderColorName],
    },
    theme === 'dark' && darkThemeStyle,
  ];

  return <View style={styles}>{children}</View>;
};
