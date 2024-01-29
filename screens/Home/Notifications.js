import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Notifications() {
    return(
        <View>
            <Text style={styles.text}>Notifications!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        paddingTop: 100
    }
});

export default Notifications;
