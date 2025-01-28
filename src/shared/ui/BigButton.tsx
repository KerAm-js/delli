import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {useThemeColors} from '../hooks/useThemeColors';

interface BigButtonProps {
  text: string; // Указываем, что text должен быть строкой
  func: () => void; // Указываем, что func — это функция без аргументов, возвращающая void
}

export const BigButton: React.FC<BigButtonProps> = ({text, func}) => {
  const {colors} = useThemeColors();

  return (
    <TouchableWithoutFeedback onPress={func}>
      <View style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <View style={[styles.button, {backgroundColor: colors.accent}]}>
          <Text style={[styles.text, {color: colors.text}]}>{text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    width: 363,
    height: 50,
  },
  text: {
    fontSize: 17,
    fontWeight: '600', // Здесь исправлено значение fontWeight, т.к. '600' должно быть строкой
  },
});