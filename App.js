import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ForgotPassScreen from "./screens/ForgotPassScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Forgot" component={ForgotPassScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}