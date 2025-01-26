import {
  ThemedText,
  ThemedTouchableOpacity,
} from '@/shared';
import {Image, StyleSheet, View} from 'react-native';
import {PharmaciesImage, ShopsImage, RestaurantsImage} from '@/shared';
import {TEXT_STYLES} from '@/shared/consts/textStyles';

export const NAVBAR_HEIGHT = 150;

export const NavButtons = () => {
  return (
    <View style={styles.container}>
      <ThemedTouchableOpacity
        style={styles.bigButton}
        colorName="backgroundSecond"
        borderColorName="lineGrey">
        <ThemedText style={styles.buttonTitle}>Магазины</ThemedText>
        <Image style={styles.shopsImage} source={ShopsImage} />
      </ThemedTouchableOpacity>

      <View style={styles.smallButtonsContainer}>
        <ThemedTouchableOpacity
          style={styles.smallButton}
          colorName="backgroundSecond"
          borderColorName="lineGrey">
          <ThemedText style={styles.buttonTitle}>Рестораны</ThemedText>
          <Image style={styles.restaurantsImage} source={RestaurantsImage} />
        </ThemedTouchableOpacity>
        <ThemedTouchableOpacity
          style={styles.smallButton}
          colorName="backgroundSecond"
          borderColorName="lineGrey">
          <ThemedText style={styles.buttonTitle}>Аптеки</ThemedText>
          <Image style={styles.pharmaciesImage} source={PharmaciesImage} />
        </ThemedTouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 11,
    flexDirection: 'row',
    height: NAVBAR_HEIGHT,
    width: '100%',
    marginTop: 20,
  },
  buttonTitle: {
    ...TEXT_STYLES.smallBold,
    marginTop: 12,
    marginLeft: 12,
  },
  bigButton: {
    flex: 1,
    borderRadius: 15,
    borderCurve: 'continuous',
    overflow: 'hidden',
    borderWidth: 0.5,
  },
  smallButton: {
    flex: 1,
    borderRadius: 15,
    borderCurve: 'continuous',
    overflow: 'hidden',
    borderWidth: 0.5,
  },
  smallButtonsContainer: {
    flex: 1,
    gap: 11,
  },
  shopsImage: {
    position: 'absolute',
    right: -18,
    bottom: -12,
    width: 110,
    height: 110,
  },
  pharmaciesImage: {
    position: 'absolute',
    right: -8,
    bottom: -14,
    width: 70,
    height: 70,
  },
  restaurantsImage: {
    position: 'absolute',
    right: -8,
    bottom: -8,
    width: 70,
    height: 70,
  },
});
