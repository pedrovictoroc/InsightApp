import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './Login/'
import Home from './Home/'
import JobDescription from './JobDescription/'
import ApiPage from './ApiPage/'
import HowItWorks from './HowItWorks/'

const AppStack = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false   
                }}
            >
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="JobDescription" component={JobDescription}/>
                <AppStack.Screen name="ApiPage" component={ApiPage}/>
                <AppStack.Screen name="HowItWorks" component={HowItWorks}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}