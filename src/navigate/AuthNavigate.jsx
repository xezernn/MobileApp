import React from 'react'
import Login from '../screen/Login'
import SignUp from '../screen/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigate = () => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Sigun' component={SignUp} />
        </Stack.Navigator>
    )
}

export default AuthNavigate
