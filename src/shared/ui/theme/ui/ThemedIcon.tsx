import {ColorName} from '@/shared/consts/colors';
import {useThemeColors} from '@/shared/hooks/useThemeColors';
import {
  IconComponent,
  IconComponentProps,
} from '@/shared/types/IconComponent.types';
import {FC} from 'react';

type PropTypes = {
  iconComponent: IconComponent;
  colorName?: ColorName;
  darkThemeColorName?: ColorName;
} & IconComponentProps;

export const ThemedIcon: FC<PropTypes> = ({
  iconComponent: IconComponent,
  colorName = 'text',
  darkThemeColorName,
  ...props
}) => {
  const {theme, colors} = useThemeColors();
  const color =
    theme === 'dark' && darkThemeColorName
      ? colors[darkThemeColorName]
      : colors[colorName];
  return <IconComponent color={color} {...props} />;
};
