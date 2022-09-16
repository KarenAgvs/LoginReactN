import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogedScreen from './LogedScreen'

const stack = createNativeStackNavigator()


const MaunStacks = () => {
  return (
    <NavigationContainer>
        <stack.Navigator
        name = "LogedScreen"
        component = {LogedScreen}
        />
            
        
    </NavigationContainer>
    
  )
}

export default MaunStacks