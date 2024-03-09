import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../screen/HomePage';
import Profile from '../screen/Profile';

const Stack = createNativeStackNavigator();

const UserNavigate = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='Home' component={HomePage} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    )
}
export default UserNavigate
