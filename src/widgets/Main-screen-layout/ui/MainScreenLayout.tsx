import {
  SCREEN_PADDING_HORIZONTAL,
  ThemedView,
} from '@/shared';
import {NavButtons} from './NavButtons';
import {StyleSheet} from 'react-native';
import {FC, PropsWithChildren} from 'react';
import {GoChangeAddress} from '@/features/go-change-address';
import {ScrollView} from 'react-native';

export const MainScreenLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ThemedView colorName="backgroundSecond">
        <ThemedView colorName="background" style={styles.navbar}>
          <GoChangeAddress />
          <NavButtons />
        </ThemedView>
        <ThemedView colorName="background" style={styles.childrenContainer}>
          {children}
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    paddingHorizontal: SCREEN_PADDING_HORIZONTAL,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderCurve: 'continuous',
    paddingTop: 10,
    paddingBottom: 15,
    marginBottom: 20,
  },
  childrenContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderCurve: 'continuous',
    minHeight: 800,
  },
});
