import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreenStack, CategoryStack, NotificationStack, AccountStack, CartStack } from './StackNavigation';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
            return <Feather name={'home'} size={size} color={color} />;

          } else if (route.name === 'Categories') {
            iconName = focused
            return <MaterialIcons name={'category'} size={size} color={color} />;
          } else if (route.name === 'Notifications') {
            iconName = focused
            return <Feather name={'bell'} size={size} color={color} />;
          } 
          else if (route.name === 'Account') {
            iconName = focused
            return <MaterialCommunityIcons name={'account-circle-outline'} size={size} color={color} />;
          } else if (route.name === 'Cart') {
            iconName = focused
            return <AntDesign name={'shoppingcart'} size={size} color={color} />;
          }

        },
        tabBarActiveTintColor: "#047BD5",
        tabBarInactiveTintColor: "#6B6B6B",

      })}
    >
      <Tab.Screen name="Home" component={HomeScreenStack}
        options={{
          headerShown: false
        }} />
      <Tab.Screen name="Categories" component={CategoryStack}
        options={{
          headerShown: false
        }} />
      <Tab.Screen name="Notifications" component={NotificationStack}
        options={{
          headerShown: false
        }} />
        <Tab.Screen name="Account" component={AccountStack}
        options={{
          headerShown: false
        }} />
        <Tab.Screen name="Cart" component={CartStack}
        options={{
          headerShown: false
        }} />
       

    </Tab.Navigator>

  )
}

export default BottomTab;