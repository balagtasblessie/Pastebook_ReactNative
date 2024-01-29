import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen from '../screens/Home/ProfileScreen';
import NewsfeedScreen from '../screens/Home/NewsfeedScreen';
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Search from '../screens/Home/Search';
import Notifications from '../screens/Home/Notifications'
import FriendRequest from '../screens/Home/FriendRequest';
import PictureGallery from '../screens/Home/PictureGallery';
import PictureAlbum from '../screens/Home/PictureAlbum';

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator 
    screenOptions={({route}) => ({
        tabBarLabel:false,
        tabBarIcon: ({color, size, focused}) => {
            let iconName;
            let icon;

            if(route.name === "Newsfeed"){
               iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === "Friend Request") {
            iconName = focused ? 'people' : 'people-outline';
          }
          else if (route.name === "Album") {
            iconName = focused ? 'image-sharp' : 'image-outline';
          }
          else if (route.name === "Notifications") {
            iconName = focused ? 'notifications-sharp' : 'notifications-outline';
          } 
            else if (route.name === "Profile") {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
            } 
            return <Ionicons name={iconName} size={25} color={color} />;
        },
    })} 
    barStyle={{height: 60}}>
      <Tab.Screen name="Newsfeed" component={NewsfeedScreen}
      />
      <Tab.Screen name="Friend Request" component={FriendRequest}/>
      <Tab.Screen name="Notifications" component={Notifications}/>
      <Tab.Screen name="Album" component={PictureAlbum}/>
      <Tab.Screen name="Profile" component={ProfileScreen}
      options={{ headerShown: true}} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;