import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Alert, ScrollView, Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Orientation from 'react-native-orientation';

export default function SettingsScreen({navigation}) {

  const [isLandscape, setIsLandscape] = useState(Dimensions.get('window').width > Dimensions.get('window').height);

  useEffect(() => {
    const updateOrientation = () => {
      setIsLandscape(Dimensions.get('window').width > Dimensions.get('window').height);
    };

    // Add event listener for orientation change
    Dimensions.addEventListener('change', updateOrientation);

    // Remove event listener when the component is unmounted
    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

  return (

      <View style={isLandscape ? styles.landscapeContainer : styles.centeredContainer}>
       <Text style={styles.text}>Settings</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignItems: "center", 
    justifyContent: "center", 
    color: 'white',
    fontSize: 18,
    paddingBottom: 25,
    fontWeight: "bold",
    textAlign: "center", 
  },
});
