import {ArrowBottomIcon, LocationMarkIcon, ThemedText} from '@/shared';
import { TEXT_STYLES } from '@/shared/consts/textStyles';
import {ThemedIcon} from '@/shared/ui/theme/ui/ThemedIcon';
import {StyleSheet, View} from 'react-native';

export const GoChangeAddress = () => {
  return (
    <View style={styles.container}>
      <ThemedIcon iconComponent={LocationMarkIcon} />
      <ThemedText colorName="text" style={styles.address}>ул. С-Х Яндарова, 250</ThemedText>
      <ThemedIcon style={styles.arrow} iconComponent={ArrowBottomIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    marginBottom: 2,
  },
  address: {
    marginLeft: 8,
    marginRight: 5,
    ...TEXT_STYLES.standartSemibold
  },
});
