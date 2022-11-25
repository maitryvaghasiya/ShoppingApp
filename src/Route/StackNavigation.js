import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from '../Container/LogInScreen';
import HomeScreen from '../Container/HomeScreen/Home';
import ForgetPass from '../Container/LogInScreen/ForgetPass/forgetpass';
import OtpScreen from '../Container/LogInScreen/ForgetPass/otp';
import SignupScreen from '../Container/SignupScreen';
import CategoryScreen from '../Container/HomeScreen/Category';
import NotificationScreen from '../Container/HomeScreen/Notification';
import AccountScreen from '../Container/HomeScreen/Account';
import CartScreen from '../Container/HomeScreen/Cart';
import SearchScreen from '../Container/HomeScreen/SearchScreen';


const Stack = createNativeStackNavigator();

function LogInStack() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="LogInScrn"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="LogInScrn" component={LogInScreen} />
                <Stack.Screen name="ForgetPassword" component={ForgetPass} />
                <Stack.Screen name="OtpScrn" component={OtpScreen} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="HomeScrn" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function HomeScreenStack() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="HomeScrn"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="HomeScrn" component={HomeScreen} />
                <Stack.Screen name="SearchScrn" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
function CategoryStack() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="HomeScrn"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="CategoryScrn" component={CategoryScreen} />
                <Stack.Screen name="SearchScrn" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
function NotificationStack() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="HomeScrn"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="NotifyScrn" component={NotificationScreen}
 />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
function AccountStack() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="HomeScrn"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="AccScrn" component={AccountScreen} />
                <Stack.Screen name="SearchScrn" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
function CartStack() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="HomeScrn"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="CartScrn" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export {LogInStack, HomeScreenStack, CategoryStack, NotificationStack, AccountStack, CartStack};