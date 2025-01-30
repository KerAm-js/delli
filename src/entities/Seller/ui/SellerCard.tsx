import { ThemedText, ThemedView, useThemeColors } from '@/shared';
import { TEXT_STYLES } from '@/shared/consts/textStyles';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


interface SellerCardProps {
  name: string; // Название магазина (например, "Перекрёсток")
  rating: number; // Рейтинг (например, 5.0)
  size: 'small' | 'big'; // Размер карточки
  imageUrl: string; // Ссылка на изображение
}

export const SellerCard: React.FC<SellerCardProps> = ({ name, rating, size, imageUrl }) => {
  const { colors } = useThemeColors();

  return (
    <ThemedView
      colorName="backgroundSecond"
      style={[styles.card, size === 'small' ? styles.smallCard : styles.bigCard]}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <ThemedText style={styles.storeName}>{name}</ThemedText>
        <View style={styles.ratingContainer}>
          <Icon name={'star'} size={13} color={'yellow'} />
          <ThemedText style={styles.ratingText}>{rating.toFixed(1)}</ThemedText>
        </View>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 10,
  },
  smallCard: {
    width: 250,
    height: 210,
  },
  bigCard: {
    width: '95%',
    height: 260,
  },
  image: {
    width: '100%',
    height: '75%',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  storeName: {
    ...TEXT_STYLES.standartBold,
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ratingText: {
    ...TEXT_STYLES.ultraSmall,
    fontWeight: 'bold',
    marginRight: 5,
    marginLeft: 2,
  },
  star: {

  },
});

export default SellerCard;