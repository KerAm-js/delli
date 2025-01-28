import React, { useState } from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';

interface InputProps {
  placeholder?: string; // необязательное свойство
  onChangeText?: (text: string) => void; // необязательная функция, принимающая строку
}

export const Input: React.FC<InputProps> = ({placeholder, onChangeText}) => {
    const {colors} = useThemeColors()
    const [focus, setFocus] = useState(false)
  return (
    <View style={styles.container}>
      <TextInput
        
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={[styles.input, {backgroundColor: colors.backgroundSecond, borderColor: `rgba(0, 122, 255, ${focus ? 1 : 0})`, borderWidth: 1}]}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    width: 363,
    height: 45,
    borderRadius: 12,
    paddingHorizontal: 20,
    marginVertical: 5
  }
});