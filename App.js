import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {LogInStack} from './src/Route/StackNavigation'
import BottomTab from './src/Route/BottomNavigation';
import CategoryMobile from './src/Container/HomeScreen/Category/mobile';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <LogInStack />
        {/* <BottomTab /> */}
        {/* <CategoryMobile/> */}

      </NavigationContainer>

    </>
  )
}
