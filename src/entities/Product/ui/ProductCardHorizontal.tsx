import {ThemedText, ThemedView, useThemeColors} from '@/shared';
import {TEXT_STYLES} from '@/shared/consts/textStyles';
import React from 'react';
import {StyleSheet, Text, View, Image, Platform} from 'react-native';

interface ProductCardHorizontalProps {
  price: string; // Цена (например, "87 ₽")
  title: string; // Название продукта (например, "Бананы Global Village свежие")
  weight: string; // Вес (например, "500 г")
  children?: React.ReactNode; // Кнопка или другой контент

}

export const ProductCardHorizontal: React.FC<ProductCardHorizontalProps> = ({
  price,
  title,
  weight,
  children,

}) => {
    const {colors} = useThemeColors()
  return (
    <ThemedView
      colorName='backgroundSecond'
      style={styles.card}>

      <View style={styles.leftSide}>
      <Image
        source={require('@/shared/assets/images/shops.png')}
        style={[styles.image]}
        resizeMode="contain"
      />

      <View style={styles.cardInfo}>
      <ThemedText ellipsizeMode="tail" style={styles.title} numberOfLines={2}>
          {title}
        </ThemedText>
        <View style={styles.row}>
        <ThemedText style={styles.price}>{price}</ThemedText>
        <ThemedText colorName="textGrey" style={styles.weight}>
          {weight}
        </ThemedText>
        </View>
      </View>
      </View>

      <View style={styles.buttonContainer}>{children}</View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 90,
    width: '95%',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  leftSide: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',

  },
  image: {
    width: 70,
    height: '100%',
    borderRadius: 12,
    backgroundColor: 'white'
  },
  cardInfo: {
    width: '67%',
    justifyContent: 'space-between',

  },
  price: {
    ...TEXT_STYLES.standartBold,
    marginRight: 7
  },
  title: {
    ...TEXT_STYLES.small,
    maxHeight: 40,
  },
  weight: {
    ...TEXT_STYLES.ultraSmall,
  },
  buttonContainer: {
    width: '30%',
    justifyContent: 'flex-end',

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default ProductCardHorizontal;
