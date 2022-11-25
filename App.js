import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LogInStack from './src/Route/StackNavigation'
import BottomTab from './src/Route/BottomNavigation';

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <LogInStack /> */}
        <BottomTab />
      </NavigationContainer>

    </>
  )
}
