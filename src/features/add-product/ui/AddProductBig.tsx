import {
  SCREEN_PADDING_HORIZONTAL,
  ThemedText,
  ThemedTouchableOpacity,
} from '@/shared';
import {TEXT_STYLES} from '@/shared/consts/textStyles';
import {useSafeAreaPaddings} from '@/shared/hooks/useSafeAreaPaddings';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';

const PRICE = 100;
const BUTTON_HIT_SLOP = 3;

export const AddProductBig = () => {
  const {paddingBottom} = useSafeAreaPaddings();
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(value => ++value);
  };

  const decrement = () => {
    setCount(value => --value);
  };

  return (
    <View style={[styles.container, {paddingBottom}]}>
      <ThemedText style={styles.totalCost}>{PRICE} ₽</ThemedText>
      <View style={styles.buttonsContainer}>
        {count ? (
          <>
            <ThemedTouchableOpacity
              style={styles.smallButton}
              colorName="accent"
              onPress={decrement}
              hitSlop={BUTTON_HIT_SLOP}
            >
              <ThemedText colorName="background" style={styles.buttonText}>
                -
              </ThemedText>
            </ThemedTouchableOpacity>
            <ThemedText style={styles.productAmount}>{count}</ThemedText>
            <ThemedTouchableOpacity
              style={styles.smallButton}
              colorName="accent"
              onPress={increment}
              hitSlop={BUTTON_HIT_SLOP}
            >
              <ThemedText colorName="background" style={styles.buttonText}>
                +
              </ThemedText>
            </ThemedTouchableOpacity>
          </>
        ) : (
          <ThemedTouchableOpacity
            onPress={increment}
            colorName="accent"
            style={styles.bigButton}
            hitSlop={BUTTON_HIT_SLOP}>
            <ThemedText colorName="background" style={styles.buttonText}>
              +
            </ThemedText>
          </ThemedTouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SCREEN_PADDING_HORIZONTAL,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingTop: 12,
    backgroundColor: '#fff',
  },
  totalCost: {
    ...TEXT_STYLES.title,
  },
  productAmount: {
    ...TEXT_STYLES.standartBold,
  },
  buttonsContainer: {
    height: 44,
    width: 170,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bigButton: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderCurve: 'continuous',
  },
  smallButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    borderCurve: 'continuous',
  },
  buttonText: {
    ...TEXT_STYLES.titleBig,
  },
});
