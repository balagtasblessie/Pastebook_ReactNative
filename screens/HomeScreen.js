import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <Text style={styles.text}>Header</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  headerContainer: {
    backgroundColor: "#3373B0",
    height: "8%",
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 2
  },
  text: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    
  },
  
});
