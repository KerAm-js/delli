import {FC} from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';
import {ColorName} from '../../../consts/colors';
import {useThemeColors} from '@/shared/hooks/useThemeColors';

type PropTypes = ScrollViewProps & {
  colorName: ColorName;
};

export const ThemedScrollView: FC<PropTypes> = ({
  colorName,
  contentContainerStyle,
  ...props
}) => {
  const {colors} = useThemeColors();
  return (
    <ScrollView
      contentContainerStyle={[
        {backgroundColor: colors[colorName]},
        contentContainerStyle,
      ]}
      {...props}>
      {props.children}
    </ScrollView>
  );
};
