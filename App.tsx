import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Initial from './src/screens/initial/Initial';
import Register from './src/screens/register/Register';
import Login from './src/screens/login/Login';
import HomeUser from './src/screens/@users/HomeUser';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Initial} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='User' component={HomeUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
