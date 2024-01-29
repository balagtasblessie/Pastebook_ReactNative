import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'

export default PictureAlbum = ({navigation}) => {
  const data = [
    {
      id: 1,
      title: 'Album 1',
      count: 4,
      image: 'https://bootdey.com/image/400x200/FFB6C1/000000',
    },
    {
      id: 2,
      title: 'Album 2',
      count: 4,
      image: 'https://bootdey.com/image/400x200/87CEEB/000000',
    },
  ]

  const [results, setResults] = useState(data)

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Photo Albums</Text>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={results}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />
        }}
        renderItem={post => {
          const item = post.item
          return (
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Gallery")}>
              <View style={styles.imageContainer}>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.count}>({item.count} Photos)</Text>
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
  },
  list: {
    paddingHorizontal: 10,
  },
  listContainer: {
    alignItems: 'center',
  },
  separator: {
    marginTop: 10,
  },
  card: {
    marginVertical: 8,
    backgroundColor: 'white',
    flexBasis: '45%',
    marginHorizontal: 10,
  },
  cardContent: {
    paddingVertical: 17,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
    color: '#778899',
  },
  count: {
    fontSize: 18,
    flex: 1,
    color: '#B0C4DE',
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
})

              