import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, Alert, RefreshControl } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';

const NewsfeedScreen = () => {
  const [status, setStatus] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const dummyPosts = [
      { id: '1', text: 'Lorem ipsum dolor sit amet', image: require('../../assets/bg.jpg'), user: { name: 'John Doe', profileImage: require('../../assets/bg.jpg') } },
      { id: '2', text: 'Consectetur adipiscing elit', image: require('../../assets/bg.jpg'), user: { name: 'Jane Doe', profileImage: require('../../assets/bg.jpg') } },
    ];

    setPosts(dummyPosts);
  }, []);

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const handlePostStatus = () => {
    if (status || image) {

      const newPost = {
        id: String(posts.length + 1),
        text: status,
        image: image,
        user: { name: 'Your Name' }, 
      };

      setPosts([newPost, ...posts]);

      setStatus('');
      setImage(null);
    } else {
      Alert.alert('Error', 'Please enter a status or choose an image.');
    }
  };

  const renderPostItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={require('../../assets/bg.jpg')} style={styles.userImage} />
        <Text style={styles.username}>{item.user.name}</Text>
      </View>

      <Text>{item.text}</Text>
      {item.image && <Image source={item.image} style={styles.postImage} />}

      <View style={styles.postButtonsContainer}>
        <TouchableOpacity style={styles.postIconContainer}>
          <FontAwesome name="heart" size={30} color="red" />
          <Text style={{ paddingLeft: 8 }}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.postIconContainer}>
          <FontAwesome name="comment" size={30} color="green" />
          <Text style={{ paddingLeft: 8 }}>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Image source={require('../../assets/Logo1_dark.png')} style={{width:"60%", height:60, marginTop: 30, marginBottom:10, alignSelf:"center"}}></Image> */}
      <View style={styles.inputContainer}>
      <TextInput
          placeholder="What's on your mind?"
          value={status}
          onChangeText={(text) => setStatus(text)}
          multiline
          style={styles.input}
        />
        
        
      </View>
      <TouchableOpacity onPress={handleImagePicker} style={{alignSelf:'center',}}>
          {image ? (
            <Image source={{ uri: image }} style={styles.imagePreview} />
          ) : (
            <FontAwesome name='camera' size={15} style={{padding:15}}><Text>  Add Image</Text></FontAwesome>
          )}
        </TouchableOpacity>

      <TouchableOpacity onPress={handlePostStatus} style={styles.postButton}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPostItem}
        style={styles.postList}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 3, 
    borderColor: '#ddd',
    backgroundColor: "white",
    marginTop: 15,
    borderRadius: 20,
    width: '100%',
    height: 70
  },
  imagePreview: {
    width: 130,
    height: 80,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    borderRadius: 8,
    padding: 10,
  },
  postButton: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  postButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  postContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 8,
  },
  postButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  postIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postList: {
    marginTop: 16,
  },
};

export default NewsfeedScreen;
