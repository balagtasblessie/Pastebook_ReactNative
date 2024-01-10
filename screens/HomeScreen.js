import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.6,
  },
  centeredContainer: {
    position: 'absolute',
    backgroundColor: "#3373B0",
    width: '70%',
    alignSelf: "center",
    height: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  centeredText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    alignItems: "center", 
  justifyContent: "center", 
    color: 'white',
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center", 
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
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: "white"
  },
  input: {
    backgroundColor: "white",
    alignSelf: "center",
    padding: 8,
    width: "75%",
    borderRadius: 5,
    marginBottom: 20,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberLabel: {
    fontSize: 15,
    marginLeft: 8,
  },
  button: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#eab676',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'white',
  },
  clickableText: {
    paddingTop: 15,
    color: 'white',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  errorText: {
    color: "red",
    marginBottom: 10 
  }
});
