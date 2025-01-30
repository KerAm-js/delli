/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {ScrollView, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useThemeColors} from './src/shared/hooks/useThemeColors';
import {BigButton, InfoBlock, Input, TextArea, ThemedView} from './src/shared';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProductCardHorizontal, ProductCardVertical} from '@/entities/Product';
import { BasketCard } from '@/entities/Basket';
import { SellerCard, StoreHeader } from '@/entities/Seller';
import { UserInfo } from '@/entities/User';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {colors} = useThemeColors();
  return (
    <ThemedView
      colorName="background"
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ProductCardVertical
        isThin={true}
        price="87 ₽"
        title="Бананы Global Village свежие"
        weight="500 г">
        <View
          style={{
            width: 101,
            height: 28,
            backgroundColor: colors.backgroundSecond,
            borderRadius: 13,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: colors.text, fontSize: 17, fontWeight: 600}}>
            +
          </Text>
        </View>
      </ProductCardVertical>
      <ProductCardHorizontal
        price="87 ₽"
        title="Бананы Global Village свежие"
        weight="500 г">
        <View
          style={{
            width: 101,
            height: 28,
            backgroundColor: colors.backgroundSecond,
            borderRadius: 13,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: colors.text, fontSize: 17, fontWeight: 600}}>
            +
          </Text>
        </View>
      </ProductCardHorizontal>
    </ThemedView>
  );
};

const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const {colors} = useThemeColors();
  return (
    <ScrollView
      style={{
        paddingTop: top,
        backgroundColor: colors.background,
        height: '100%',
      }} contentContainerStyle={{alignItems: 'center'}}>
      <BasketCard
          storeName="Перекрёсток"
          date="17 мая, 2024"
          totalPrice="500 ₽"
          orderAmount="348 ₽"
          address="г. Урус-Мартан, ул. С-Х Яндарова, д. 1"
        >
          <View style={{backgroundColor: colors.background, width: '90%', height: 50, borderRadius: 5, marginBottom: 10}}></View>
          <View style={{backgroundColor: colors.background, width: '90%', height: 50, borderRadius: 5, marginBottom: 10}}></View>
          <View style={{backgroundColor: colors.background, width: '90%', height: 50, borderRadius: 5, marginBottom: 10}}></View>
          <View style={{backgroundColor: colors.background, width: '90%', height: 50, borderRadius: 5, marginBottom: 10}}></View>
        </BasketCard>

        {/* Большая карточка */}
      <SellerCard 
        name="Перекрёсток" 
        rating={5.0} 
        size="big" 
        imageUrl="https://i.pinimg.com/originals/37/77/5a/37775a927105f5bc81e725ada5abb414.jpg" 
      />

      {/* Маленькая карточка */}
      <SellerCard 
        name="Магнит" 
        rating={4.8} 
        size="small" 
        imageUrl="https://i.pinimg.com/originals/37/77/5a/37775a927105f5bc81e725ada5abb414.jpg" 
      />

<StoreHeader 
        name="Перекрёсток" 
        rating={5.0} 
        reviews={120} 
        hours="10:00–23:00" 
        address="г. Москва, ул. Ленина, д. 10" 
      />

<UserInfo
  fullName="Иван Иванов"
  address="Москва, ул. Ленина, 10"
  phone="+7 123 456 7890"
/>

    </ScrollView>
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
