import {FC} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {ColorName} from '../../consts/colors';
import {useThemeColors} from '../../hooks/useThemeColors';

type PropTypes = TouchableOpacityProps & {
  colorName: ColorName;
  style?: TouchableOpacityProps['style'];
  darkThemeColorName?: ColorName;
  darkThemeStyle?: TouchableOpacityProps['style'];
  borderColorName?: ColorName;
};

export const ThemedTouchableOpacity: FC<PropTypes> = ({
  colorName,
  borderColorName,
  darkThemeColorName,
  darkThemeStyle,
  style,
  children,
  ...props
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

  return (
    <TouchableOpacity style={styles} {...props}>
      {children}
    </TouchableOpacity>
  );
};
