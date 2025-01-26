import {ThemedText, ThemedTouchableOpacity} from '@/shared';
import {TEXT_STYLES} from '@/shared/consts/textStyles';
import {StyleSheet} from 'react-native';

export const RepeatOrder = () => {
  return (
    <ThemedTouchableOpacity
      hitSlop={5}
      colorName="accent"
      style={styles.container}>
      <ThemedText style={styles.title} colorName="background">
        Повторить заказ
      </ThemedText>
    </ThemedTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    maxWidth: 250,
    minWidth: 180,
    flex: 1,
    borderRadius: 20,
    borderCurve: 'continuous',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...TEXT_STYLES.standartBold,
  },
});
