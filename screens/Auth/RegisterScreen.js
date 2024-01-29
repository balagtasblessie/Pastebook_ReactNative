import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, CheckBox, TouchableOpacity, Alert, ScrollView, Modal, } from 'react-native';
import DatePicker from "react-native-modern-datepicker";
import {getFormatedDate} from "react-native-modern-datepicker";
import { AuthContext, useAuth} from "../../context/authContext"
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { Storage } from '../../utils/config';

export default function RegisterScreen({navigation}) {
    // const [user, setUser] = useState({
    //     firstName: '',
    //     lastName: '',
    //     sex: ['Male', 'Female', 'Others'],
    //     email: '',
    //     phoneNumber: '',
    //     password: '',
    //   });

    const {register} = useAuth();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const genderOptions = ['Male', 'Female', 'Others']
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [VerificationCode, setVerificationCode] = useState('');

    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isEmailAvailable, setIsEmailAvailable] = useState(true);
    const [isVerificationCodeValid, setIsVerificationCodeValid] = useState(true);
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isGenderValid, setIsGenderValid] = useState(true);
    const [isDateOfBirthValid, setIsDateOfBirthValid] = useState(true);

    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);


    const validateEmail = async () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(email);

      setIsValidEmail(isValid);

      if (isValid) {
          const result = emailAvailability ? await emailAvailability(email) : undefined;
          if (result) {
              setIsEmailAvailable(true);
              handleNext();
          } else {
              setIsEmailAvailable(false);
          }
      }
  };

  const handleRegistration = async () => {
    if (password === confirmPassword || (password == null && confirmPassword === '')) {
      try {
        console.log('Storing user registration data...');
        await Storage.setItem('firstName', firstName);
        await Storage.setItem('lastName', lastName);
        await Storage.setItem('email', email);
        await Storage.setItem('password', password);
        await Storage.setItem('dateOfBirth', dateOfBirth);
        await Storage.setItem('gender', gender);
        await Storage.setItem('phoneNumber', phoneNumber);
  
        console.log('Calling register function...');
        const result = register ? await register(firstName, lastName, email, password, dateOfBirth, gender, phoneNumber) : undefined;
  
        console.log('Registration result:', result);
  
        if (result === "User Registered Successfully") {
          console.log('Registration successful');
          Alert.alert('Registration successful');
          setTimeout(() => {
            navigation.navigate('Login');
          }, 1000);
        } else {
          console.error('Error Registering:', result);
          Alert.alert('Error Registering');
        }
      } catch (error) {
        console.error('Error storing registration data:', error);
        Alert.alert('Error Registering');
      }
    } else {
      Alert.alert('Passwords do not match');
    }
  };
  
  
  

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker)
  }
  const today = new Date('1990/01/01');
  const startDate = getFormatedDate(today.setDate(today.getDate()+1), 'YYYY/MM/DD');
  const [startedDate, setStartedDate] = useState('01/01/1990');

  function handleChangeStartDate (propDate) {
    setStartedDate(propDate)
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Gender');


  const handleOptionSelect = (gender) => {
    setSelectedValue(gender);
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={require('../../assets/bg.jpg')} style={styles.backgroundImage}>
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
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
        <TouchableOpacity onPress={handleOnPressStartDate}>
        <View style={styles.input}>
        <Text>{dateOfBirth}</Text>
        </View>
      </TouchableOpacity>
        </View>

      <Modal
        animationType='slide'
        transparent={true}
        visible={openStartDatePicker}
        >
          <View style={{flex:1, alignItems: "center", justifyContent: 'center',}}>
              <View style={styles.modalDatePicker}>

                <DatePicker
                  mode="calendar"
                  minimumDate={startDate}
                  selected={startedDate}
                  onDateChanged={handleChangeStartDate}
                  onSelectedChange={date=>setDateOfBirth(date)}
                  options={{
                    backgroundColor: "#080516",
                    textHeaderColor: "#469ab6",
                    textxDefaultColor: "#FFFFFF",
                    selectedTextColor: "#FFF",
                    mainColor: "#469ab6",
                    textSecondaryColor: "#FFFFFF",
                    borderColor: 'rgba(122, 146, 165, 0.1)'
                  }}

                />
                <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text style={{color:"white"}}>Close</Text>
                 
                </TouchableOpacity>
              </View>
          </View>

        </Modal>

        <View style={styles.inputGroup}>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.input}>
          <Text>{selectedValue}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onBackDropPress={() => setModalVisible(false)}>
         <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',}}
          >
          <View style={{ width: 200, padding: 10, backgroundColor: '#fff' }}>
            {genderOptions.map((gender, index) => (
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
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
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
  },
  modalDatePicker: {
    margin: 20,
    backgroundColor: "#080516",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});
