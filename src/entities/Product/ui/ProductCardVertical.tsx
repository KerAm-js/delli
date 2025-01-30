import {ThemedText, ThemedView} from '@/shared';
import {TEXT_STYLES} from '@/shared/consts/textStyles';
import React from 'react';
import {StyleSheet, Text, View, Image, Platform} from 'react-native';

interface ProductCardVerticalProps {
  price: string; // Цена (например, "87 ₽")
  title: string; // Название продукта (например, "Бананы Global Village свежие")
  weight: string; // Вес (например, "500 г")
  children?: React.ReactNode; // Кнопка или другой контент
  isThin?: boolean;
}

export const ProductCardVertical: React.FC<ProductCardVerticalProps> = ({
  price,
  title,
  weight,
  children,
  isThin,
}) => {
  return (
    <ThemedView
      darkThemeColorName="backgroundSecond"
      colorName={Platform.OS === 'ios' ? 'background' : 'backgroundSecond'}
      style={[styles.card, {width: isThin ? 120 : '50%'}]}>
      {/* Картинка */}
      <Image
        source={require('@/shared/assets/images/shops.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.cardInfo}>
        <ThemedText style={styles.price}>{price}</ThemedText>
        <ThemedText ellipsizeMode="tail" style={styles.title} numberOfLines={2}>
          {title}
        </ThemedText>
        <ThemedText colorName="textGrey" style={styles.weight}>
          {weight}
        </ThemedText>
      </View>

      <View style={styles.buttonContainer}>{children}</View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 266,

    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: '43.2%',
    marginBottom: 5,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  cardInfo: {
    width: '100%',
  },
  price: {
    ...TEXT_STYLES.standartBold,
  },
  title: {
    ...TEXT_STYLES.small,
    maxHeight: 40,
  },
  weight: {
    ...TEXT_STYLES.ultraSmall,
  },
  buttonContainer: {
    marginTop: 1,
    width: '100%',
    alignItems: 'center',
  },
});

export default ProductCardVertical;
