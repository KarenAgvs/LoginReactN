import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import LogInScreen from './LogInScreen';


const Stack= createNativeStackNavigator(); 

const HomeScreen = () => {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Expo app'  options={{headerShown:false}} component={LogInScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
