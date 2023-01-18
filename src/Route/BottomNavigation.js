import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreenStack, CategoryStack, NotificationStack, AccountStack, CartStack, LogInStack } from './StackNavigation';
import { useSelector } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage"
import LogInScreen from '../Container/LogIn';
import ForgetPass from '../Container/LogIn/ForgetPass/forgetpass';
import OtpScreen from '../Container/LogIn/ForgetPass/otp';
import SignupScreen from '../Container/SignupScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTab() {
  const [AsyncDataValue, setAsyncDataValue] = useState(null)

  let authData = useSelector(state => state.auth)

  console.log("userData111", authData);

  useEffect(() => {
    asyncData()
  }, [])

  let asyncUser = null;

  const asyncData = async () => {
    asyncUser = await AsyncStorage.getItem("user")

    setAsyncDataValue(asyncUser)
  }

  console.log("asyncUser000", AsyncDataValue !== "Valid", authData.auth === null);

  if (authData.auth === null) {
    return (
      <Stack.Navigator
        initialRouteName="LogInScrn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LogInScrn" component={LogInScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPass} />
        <Stack.Screen name="OtpScrn" component={OtpScreen} />
        <Stack.Screen name="SignupScrn" component={SignupScreen} />
        <Stack.Screen name="Home1" component={BottomTab} />
      </Stack.Navigator>
    )
  } else {

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
}

export default BottomTab;