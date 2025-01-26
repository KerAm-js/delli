import {ThemedText, ThemedTouchableOpacity} from '@/shared';
import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

export const AddProductSmall = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(value => ++value);
  };

  const decrement = () => {
    setCount(value => --value);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  if (count > 0) {
    return (
      <View style={[styles.container, styles.circleButtonsContainer]}>
        <ThemedTouchableOpacity
          style={styles.circleButton}
          colorName="backgroundSecond"
          onPress={decrement}>
          <ThemedText>-</ThemedText>
        </ThemedTouchableOpacity>
        <ThemedText>{count}</ThemedText>
        <ThemedTouchableOpacity
          style={styles.circleButton}
          colorName="backgroundSecond"
          onPress={increment}>
          <ThemedText>+</ThemedText>
        </ThemedTouchableOpacity>
      </View>
    );
  }

  return (
    <ThemedTouchableOpacity
      onPress={increment}
      colorName="backgroundSecond"
      style={styles.container}
      hitSlop={{top: 11, bottom: 11}}>
      <ThemedText>+</ThemedText>
    </ThemedTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 28,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 14,
    borderCurve: 'continuous',
  },
  circleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleButton: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
});
