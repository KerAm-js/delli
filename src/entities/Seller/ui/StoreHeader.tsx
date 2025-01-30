import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemedText, ThemedView, useThemeColors } from '@/shared';
import { TEXT_STYLES } from '@/shared/consts/textStyles';

interface StoreHeaderProps {
  name: string; // Название магазина (например, "Перекрёсток")
  rating: number; // Рейтинг (например, 5.0)
  reviews: number; // Количество отзывов (например, 120, показывать 100+ если >100)
  hours: string; // Время работы (например, "10:00–23:00")
  address?: string; // Адрес (например, "г. Москва, ул. Ленина, д. 10")
}

export const StoreHeader: React.FC<StoreHeaderProps> = ({ name, rating, reviews, hours, address }) => {
  const { colors } = useThemeColors();

  return (
    <View  style={styles.container}>
      {/* Название магазина */}
      <ThemedText style={styles.name}>{name}</ThemedText>

      {/* Блок с рейтингом и временем работы */}
      <View style={styles.infoContainer}>
        {/* Рейтинг */}
        <View style={[styles.ratingBlock, { backgroundColor: colors.backgroundSecond }]}>
          <Icon style={{marginBottom: 3.5}} name={'star'} size={17} color={colors.text} />
          <ThemedText style={styles.boldText}>{rating.toFixed(1)}  <ThemedText colorName="textGrey" style={styles.greyText}>
            {reviews > 100 ? '100+' : reviews}
          </ThemedText></ThemedText>
          
        </View>

        {/* Время работы */}
        <View style={[styles.timeBlock, { backgroundColor: colors.backgroundSecond }]}>
          <Icon name={'time'} size={17} color={colors.text} />
          <ThemedText style={styles.boldText}>{hours}</ThemedText>
        </View>

        {/* Кнопка "..." для открытия модального окна с адресом */}
        <TouchableOpacity style={[styles.moreButton, { backgroundColor: colors.backgroundSecond }]}>
          <Icon name={'ellipsis-horizontal'} size={16} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  name: {
    ...TEXT_STYLES.title,
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40

  },
  ratingBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 8,
    width: '40%',
    height: '100%'
  },
  timeBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 8,
    width: '40%',
    height: '100%'
  },
  boldText: {
    ...TEXT_STYLES.standartBold,

  },
  greyText: {
    ...TEXT_STYLES.standart,

  },
  moreButton: {
    width: 40,
    borderRadius: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StoreHeader;