import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {LogInStack} from './src/Route/StackNavigation'
import BottomTab from './src/Route/BottomNavigation';
import CategoryMobile from './src/Container/HomeScreen/Category/mobile';
import CategoryHome from './src/Container/HomeScreen/Category/home';
import HomeScreen from './src/Container/HomeScreen/Home';
import { Provider } from 'react-redux';
import { configStore } from './src/Redux/store';
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {

  let storeA = configStore();

  return (
    <Provider store={storeA}>
      <NavigationContainer>
        {/* <LogInStack /> */}
        <BottomTab />
        {/* <CategoryMobile/> */}
        {/* <CategoryHome /> */}
        {/* <HomeScreen /> */}

      </NavigationContainer>

    </Provider>
  )
}
