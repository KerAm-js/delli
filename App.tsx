/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {useThemeColors} from './src/shared/hooks/useThemeColors';
import {InfoBlock, Input, TextArea} from './src/shared';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {colors} = useThemeColors();
  return (
    <View
      style={{
        paddingTop: top,
        backgroundColor: colors.background,
        height: '100%',
      }}>
      <Text style={{color: 'white'}}>MANSUR ABUBAKAROV</Text>
      <InfoBlock title="ФИО" value="МАНСУР АБУБАКАРОВ" />
      <Input placeholder="placeholder" />
      <Input placeholder="mansur" />
      <TextArea placeholder="Введите текст" />
    </View>
  );
};

const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const {colors} = useThemeColors();
  return (
    <View
      style={{
        paddingTop: top,
        backgroundColor: colors.background,
        height: '100%',
      }}>
      <Text style={{color: 'white'}}>AMIR ABUBAKAROV</Text>
      <Input placeholder="placeholder" />
    </View>
  );
};

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const {colors} = useThemeColors();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color}) => {
              let iconName;

              if (route.name === 'Главная') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Корзина') {
                iconName = focused ? 'cart' : 'cart-outline';
              } else {
                iconName = focused ? 'person' : 'person-outline';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={20} color={color} />;
            },
            tabBarActiveTintColor: colors.text,
            tabBarInactiveTintColor: colors.textGrey,
            tabBarStyle: {
              backgroundColor: colors.background,
              borderTopWidth: 1,
              borderColor: colors.lineGrey,
            },
          })}>
          <Tab.Screen
            name="Главная"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Корзина"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Профиль"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
