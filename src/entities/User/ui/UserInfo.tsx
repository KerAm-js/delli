import React from 'react';
import {View, StyleSheet} from 'react-native';
import {InfoBlock} from '@/shared/ui/InfoBlock'; // Импортируем компонент InfoBlock

interface UserInfoProps {
  fullName: string;
  address: string;
  phone: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({fullName, address, phone}) => {
  return (
    <View contentContainerStyle={styles.container}>
      <InfoBlock title="ФИО" value={fullName} />
      <InfoBlock title="Адрес" value={address} />
      <InfoBlock title="Телефон" value={phone} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});