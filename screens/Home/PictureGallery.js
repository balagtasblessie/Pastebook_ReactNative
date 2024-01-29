import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, FlatList } from 'react-native'

export default PictureGallery = ({navigation}) => {
  const data = [
    { id: 1, image: 'https://www.bootdey.com/image/400x400/FF00FF/000000' },
    { id: 2, image: 'https://www.bootdey.com/image/400x400/FF00FF/000000' },
  ]

  const [posts, setPosts] = useState(data)

  const clicked = () => {
    Alert.alert('Success', 'Item selected')
  }

  return (
    
    <View style={styles.container}>
        <Text style={styles.text}>Album Name</Text>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={posts}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />
        }}
        renderItem={({item}) => {
        
          return (
                
            <TouchableOpacity style={styles.card} onPress={(navigation.navigate("Gallery"))}>
              <Image style={styles.cardImage} source={{ uri:  item.image}} />
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
    backgroundColor: '#eee',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  separator: {
    marginTop: 10,
  },
  card: {
    marginVertical: 8,
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardImage: {
    height: 150,
    width: '100%',
    borderWidth:0.3
  },
  text: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 30
  },
})