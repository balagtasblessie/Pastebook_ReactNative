import { FontAwesome } from "@expo/vector-icons";
import React, {useState} from "react";
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function ForgotPassScreen({navigation}) {
    const [email, setEmail] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.centeredContainer}>
            <FontAwesome name="lock" size={100} color="white" />
            <Text style={styles.text}>Forgot Password?</Text>
            <Text style={{fontSize: 15, fontWeight: "bold", color: "white", marginBottom: 10}}>You can reset your Password here</Text>

            <TextInput
            style={styles.input}
            placeholder="Email Address"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
      />

        <TouchableOpacity
        style={styles.button} >
        <Text style={styles.buttonText}>Verify Email</Text>
        </TouchableOpacity>
          </View>
        </View>
    );
};

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: "#3373B0",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    },
    centeredContainer: {
        position: 'absolute',
        backgroundColor: "#0B385F",
        width: 300,
        height: 280,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
      },
      input: {
        backgroundColor: "white",
        alignSelf: "center",
        padding: 8,
        width: "75%",
        borderRadius: 6,
        marginBottom: 10,
      },
      button: {
        marginTop: 3,
        flexDirection: 'row',
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
      },
      buttonText: {
        marginLeft: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: "black",
      },
}
)