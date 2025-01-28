import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';

interface TextAreaProps {
  placeholder?: string; // необязательное свойство
  onChangeText?: (text: string) => void; // необязательная функция, принимающая строку
}

export const TextArea: React.FC<TextAreaProps> = ({ placeholder, onChangeText }) => {
  const { colors } = useThemeColors();
  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={[
          styles.textArea,
          {
            backgroundColor: colors.backgroundSecond,
            borderColor: `rgba(0, 122, 255, ${focus ? 1 : 0})`,
            borderWidth: 1,
          },
        ]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        multiline // делает компонент текстовой областью
        numberOfLines={4} // задает количество видимых строк
        textAlignVertical="top" // выравнивание текста по вертикали (опционально)
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
  textArea: {
    width: 363,
    height: 80, // высота больше, чем у обычного TextArea
    borderRadius: 12,
    paddingHorizontal: 20,
    marginVertical: 5,
    paddingTop: 10, // дополнительное пространство сверху
  },
});