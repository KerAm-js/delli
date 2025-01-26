import {ColorName} from '@/shared/consts/colors';
import {useThemeColors} from '@/shared/hooks/useThemeColors';
import {ViewProps} from 'react-native';

export type ThemedContianerPropTypes = {
  colorName: ColorName;
  darkThemeColorName?: ColorName;
  style?: ViewProps['style'];
  darkThemeStyle?: ViewProps['style'];
  borderColorName?: ColorName;
};

type UseThemedContainerStyles = (
  props: ThemedContianerPropTypes,
) => ViewProps['style'];

export const useThemedContainerStyles: UseThemedContainerStyles = ({
  style,
  colorName,
  darkThemeColorName,
  darkThemeStyle,
  borderColorName,
}) => {
  const {theme, colors} = useThemeColors();

  const finalColorName =
    theme === 'dark' && darkThemeColorName ? darkThemeColorName : colorName;

  const styles: ViewProps['style'] = [
    {
      backgroundColor: colors[finalColorName],
      borderColor: borderColorName && colors[borderColorName],
    },
    theme === 'dark' && darkThemeStyle,
    style,
  ];

  return styles
};
