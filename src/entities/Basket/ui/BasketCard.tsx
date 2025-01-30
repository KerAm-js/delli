import { ThemedText, ThemedView, useThemeColors } from '@/shared';
import { TEXT_STYLES } from '@/shared/consts/textStyles';
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

interface BasketCardProps {
  storeName: string; // Название магазина (например, "Перекрёсток")
  date: string; // Дата заказа (например, "17 мая, 2024")
  totalPrice: string; // Итоговая цена (например, "500 ₽")
  orderAmount: string; // Сумма заказа (например, "348 ₽")
  address: string; // Адрес доставки (например, "г. Урус-Мартан, ул. С-Х Яндарова, д. 1")
  children?: React.ReactNode; // Дополнительный контент
}

export const BasketCard: React.FC<BasketCardProps> = ({
  storeName,
  date,
  totalPrice,
  orderAmount,
  address,
  children,
}) => {

    const {colors} = useThemeColors()
  return (
    <ThemedView
      colorName='backgroundSecond'
      style={styles.card}
    >
      <View style={[styles.header, {borderBottomColor: colors.background}]}>
        <View>
        <ThemedText style={styles.storeName}>{storeName}</ThemedText>
        <ThemedText colorName="textGrey" style={styles.date}>
        {date}
      </ThemedText>
        </View>
        <ThemedText style={styles.totalPrice}>{totalPrice}</ThemedText>
      </View>
      
      <View style={[styles.detailsInfo, {borderBottomColor: colors.background}]}>
      <View style={styles.details}>
        <ThemedText style={[styles.label, {marginBottom: 11}]}>Сумма заказа:</ThemedText>
        <ThemedText style={styles.value}>{orderAmount}</ThemedText>
      </View>

      <View style={styles.details}>
        <ThemedText style={styles.label}>Доставка по адресу:</ThemedText>
        <ThemedText style={styles.value}>{address}</ThemedText>
      </View>
      </View>

      <View style={styles.childrenContainer}>{children}</View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    minHeight: 287,
    width: '95%',
    marginBottom: 10
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    borderBottomWidth: 1,
    padding: 15

  },
  storeName: {
    ...TEXT_STYLES.title,
  },
  totalPrice: {
    ...TEXT_STYLES.standartBold,
  },
  date: {
    ...TEXT_STYLES.standart,

  },
  detailsInfo: {
    borderBottomWidth: 1,
    padding: 15,
    paddingBottom: 4
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  label: {
    ...TEXT_STYLES.small,
    width: '40%',

  },
  value: {
    ...TEXT_STYLES.smallSemibold,
    width: '40%',
    textAlign: 'right'
  },
  childrenContainer: {
    alignItems: 'center',
    padding: 15
  },
});

export default BasketCard;