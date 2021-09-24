import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categories from '../Pages/Categories'
import Home from '../Pages/Home'

const Stack = createNativeStackNavigator()

export function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen  name='Home' component={Home} />
      <Stack.Screen name='Categories' component={Categories} />
    </Stack.Navigator>
  )
}
