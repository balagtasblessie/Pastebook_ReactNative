// import React from 'react'
// import { Text, View, StyleSheet } from 'react-native'

// export default function FriendRequest() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}> FriendRequest </Text>
//       </View>
//     )
//   }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     text: {
//         alignSelf: "center",
//         alignItems: "center",
//         justifyContent: "center",
//         fontSize: 20,
//         fontWeight: "bold",
//         paddingTop: 50
//     }
// });

import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  ScrollView,
} from 'react-native'

export default Users = () => {
  const data = [
    {
      id: 1,
      name: 'John Doe',
      image: require('../../assets/bg.jpg')
    },
    {
      id: 2,
      name: 'Jane Doe',
      image: require('../../assets/bg.jpg')
    }
  ]

  const [users, setUsers] = useState(data)
  const [modalVisible, setModalVisible] = useState(false)
  const [userSelected, setUserSelected] = useState([])


  return (
    <View style={styles.container}>
        <Text style={styles.text}> FriendRequest </Text>
      <FlatList
        style={styles.userList}
        columnWrapperStyle={styles.listContainer}
        data={users}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.card}>
              <Image style={styles.image} source={item.image} />
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.buttoncontainer}>
                <TouchableOpacity
                  style={styles.acceptButton}>
                  <Text style={styles.ButtonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.IgnoreButton}>
                  <Text style={styles.ButtonText}>Ignore</Text>
                </TouchableOpacity>
                </View>
              </View>
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
    marginTop: 20,
    backgroundColor: '#eeeeee',
            },
  text: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 25,
        fontWeight: "bold",
        paddingTop: 50,
        paddingBottom: 30
        },
  header: {
    backgroundColor: '#00CED1',
    height: 200,
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
    flex: 1,
  },
  detailContent: {
    top: 80,
    height: 500,
    width: Dimensions.get('screen').width - 90,
    marginHorizontal: 30,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
  userList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginTop: 1
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 22
  },

  name: {
    fontSize: 22,
    flex: 1,
    color: '#008080',
    fontWeight: 'bold',
  },
  buttoncontainer: {
    flexDirection: "row",
    flexWrap: 'wrap',
    alignContent: 'space-around',
    gap: 10
  },
  acceptButton: {
    height: 35,
    width: 100,
    borderRadius: 25,
    backgroundColor: 'green',
    justifyContent: "center",
    alignItems: "center"
  },
  IgnoreButton: {
    height: 35,
    width: 100,
    borderRadius: 25,
    backgroundColor: 'red',
    justifyContent: "center",
    alignItems: "center"
  },
  ButtonText: {
    color: '#FFFFFF',
    fontWeight: "bold",
    fontSize: 18, 
  },
})

                    