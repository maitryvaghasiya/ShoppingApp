import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {LogInStack} from './src/Route/StackNavigation'
import BottomTab from './src/Route/BottomNavigation';
import CategoryMobile from './src/Container/HomeScreen/Category/mobile';
import CategoryHome from './src/Container/HomeScreen/Category/home';
import HomeScreen from './src/Container/HomeScreen/Home';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <LogInStack />
        {/* <BottomTab /> */}
        {/* <CategoryMobile/> */}
        {/* <CategoryHome /> */}
        {/* <HomeScreen /> */}

      </NavigationContainer>

    </>
  )
}
