import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Alert, ScrollView, Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth, authContext} from '../../context/authContext';

export default function LoginScreen({navigation}) {

  const {login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword,setHidePassword] = useState(password)
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({})
  const validateForm = () => {
    let errors ={};

    if(!email) errors.email = "Email is required";
    if(!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  // const handleSubmit = () => {
  //   if (validateForm()) {
  //     console.log("Submitted", email, password);
  //     setEmail("");
  //     setPassword("");
  //     setErrors("");
  //   }
  // }
  
  return (

    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={require('../../assets/bg.jpg')} style={styles.backgroundImage}>
      </ImageBackground>
      <View style={styles.centeredContainer}>
        
       <Text 
        style={styles.textTitle}>Login Account</Text>
        <Text 
        style={styles.text}>Socialize. Connect. Paste It!</Text>

        <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCompleteType="email"
        autoCorrect={false}
      />

      {errors.email ? (
        <Text style={styles.errorText}>{errors.email}</Text>
      ): null}

      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCompleteType="password"
      />

      {errors.password ? (
        <Text style={styles.errorText}>{errors.password}</Text>
      ): null}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
      <FontAwesome name="key" size={20} color="white" />
      <Text style={styles.buttonText}
            > LOGIN</Text>
    </TouchableOpacity>

    <Text 
    style={styles.clickableText}
    onPress={() => navigation.navigate("Register")}>Create an account</Text>

    <Text style={{color: "white", fontSize: 15, paddingTop: 10}}>Forgot password? 
    <Text 
    style={styles.clickableText}
    onPress={() => navigation.navigate("Forgot")}> Click here.</Text>
    </Text>
      
      </View>
    </ScrollView>
  );
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
  landscapeContainer: {
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
