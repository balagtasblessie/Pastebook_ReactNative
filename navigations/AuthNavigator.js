import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import ForgotPassScreen from "../screens/Auth/ForgotPassScreen";
import BottomTabNavigator from "../navigations/BottomTabNavigator"
import ProfileScreen from "../screens/Home/ProfileScreen";

const Stack = createNativeStackNavigator()

export default function AuthNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Forgot" component={ForgotPassScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown: false}}
        />
        <Stack.Screen name="Gallery" component={PictureGallery} options={{headerShown: true}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: true}}/>
      </Stack.Navigator>
  );
}
