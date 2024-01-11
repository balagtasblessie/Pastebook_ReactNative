import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, CheckBox, TouchableOpacity, Alert, ScrollView, Modal, } from 'react-native';


export default function RegisterScreen({navigation}) {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        sex: ['Male', 'Female', 'Others'],
        email: '',
        phoneNumber: '',
        password: '',
      });
    
      const [confirmPassword, setConfirmPassword] = useState('');
    
      const handleRegistration = () => {
        if (user.password === confirmPassword || (user.password == null && confirmPassword === '')) {
          // Handle registration logic here
          // Alert.alert('Registration successful');
        } else {
          Alert.alert('Password and confirm password values do not match.');
        }
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Gender');


  const handleOptionSelect = (gender) => {
    setSelectedValue(gender);
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={require('../assets/bg.jpg')} style={styles.backgroundImage}>
        {/* Your background image content goes here */}
      </ImageBackground>
      <View style={styles.centeredContainer}>

      <Text 
        style={styles.textTitle}>Register Account</Text>
        <Text 
        style={styles.text}>Socialize. Connect. Paste It!</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={user.firstName}
            onChangeText={(text) => setUser({ ...user, firstName: text })}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={user.lastName}
            onChangeText={(text) => setUser({ ...user, lastName: text })}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Birthday"
            value={user.birthDate}
            onChangeText={(text) => setUser({ ...user, birthDate: text })}
          />

        </View>
        <View style={styles.inputGroup}>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.input}>
          <Text>{selectedValue}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
         <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',}}
          >
          <View style={{ width: 200, padding: 10, backgroundColor: '#fff' }}>
            {user.sex.map((gender, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleOptionSelect(gender)}>
                <View
                  style={{
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc', }}
                  >
                  <Text>{gender}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={user.email}
            onChangeText={(text) => setUser({ ...user, email: text })}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            value={user.phoneNumber}
            onChangeText={(text) => setUser({ ...user, phoneNumber: text })}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={user.password}
            onChangeText={(text) => setUser({ ...user, password: text })}
            secureTextEntry
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegistration}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 15, paddingTop: 10}}>Already have an account? 
    <Text 
    style={styles.clickableText}
    onPress={() => navigation.navigate("Login")}> Login here.</Text>
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
    opacity: 0.5,
  },
  centeredContainer: {
    position: 'absolute',
    backgroundColor: "#BED4E9",
    width: '80%',
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
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center", 
  },
  text: {
    alignItems: "center", 
    justifyContent: "center", 
    fontSize: 18,
    paddingBottom: 25,
    fontWeight: "bold",
    textAlign: "center", 
  },
  input: {
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    width: "90%",
    borderWidth: 1,
    alignSelf: "center",
    padding: 10,
    marginBottom: 10,
  },
  alert: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    marginTop: 3,
    flexDirection: 'row',
    width: "80%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: "white",
  },
  clickableText: {
    paddingTop: 15,
    fontSize: 15,
    textDecorationLine: 'underline',
    
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  inputGroup: {
    flex: 1,
  },
  errorText: {
    color: "red",
    marginBottom: 10 
  },
  picker: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    color: 'black',
  }
});
