import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useThemeColors} from '../hooks/useThemeColors';

interface InfoBlockProps {
  title: string;
  value: string;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({title, value}) => {
  const {colors} = useThemeColors();

  return (
    <View
      style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <View style={[styles.button, {backgroundColor: colors.backgroundSecond}]}>
        <Text style={[styles.title, {color: colors.textGrey}]}>{title}</Text>
        <Text style={[styles.value, {color: colors.text}]}>{value}</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 20,
    width: 363,
    minHeight: 74,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 5
  },
  title: {
    fontSize: 15,
    fontWeight: '600', 
  },
  value: {
    fontSize: 17,
    fontWeight: '600', 
    marginTop: 5
  },
});