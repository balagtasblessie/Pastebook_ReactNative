import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Alert, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default Search = () => {
  const data = [
    {
      id: 1,
      icon: require('../../assets/bg.jpg'),
      description: 'User 1',
    },
    {
      id: 2,
      icon: require('../../assets/bg.jpg'),
      description: 'User 2',
    },
    
  ]

  const [results, setResults] = useState(data)
  const [query, setQuery] = useState()

  const showAlert = () => {
    Alert.alert('Alert', 'Button pressed ')
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <View style={styles.inputContainer}>
          <FontAwesome
            style={[styles.inputIcon]}
            name="search"
            size={23}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Search..."
            underlineColorAndroid="transparent"
            onChangeText={q => setQuery({ q })}
          />
        </View>
      </View>

      <FlatList
        style={styles.notificationList}
        data={results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={showAlert} style={styles.notificationBox}>
              <Image style={styles.image} source={item.icon} />
              <Text style={styles.name}>{item.description}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 50,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 10,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 10,
    alignSelf: 'center',
  },
})
