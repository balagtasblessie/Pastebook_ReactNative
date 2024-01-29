import { FontAwesome } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Button, Modal, FlatList, TextInput, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
  const [status, setStatus] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);

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

  useEffect(() => {
    const dummyPosts = [
      { id: '1', text: 'Lorem ipsum dolor sit amet', image: require('../../assets/bg.jpg'), user: { name: 'John Doe', profileImage: require('../../assets/bg.jpg') } },
      { id: '2', text: 'Consectetur adipiscing elit', image: require('../../assets/bg.jpg'), user: { name: 'Jane Doe', profileImage: require('../../assets/bg.jpg') } },
    ];

    setPosts(dummyPosts);
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
      <FontAwesome name="gear" size={35} style={{marginTop:40, alignSelf:"flex-end", marginEnd: 10}} ></FontAwesome>
      </TouchableOpacity>

      <Modal visible={isModalVisible}
             animation="fade">
        <View style={{flex: 1, backgroundColor: "#fff", justifyContent: "center", alignContent:"center", backgroundColor: 'rgba(0, 0, 0, 0.5)',}}>
          <View style={{width: "100%", height:"80%", padding: 10, backgroundColor: "#fff",}}>
          <TouchableOpacity onPress={toggleModal}>
            <FontAwesome name='close' size={32} style={{alignSelf: "flex-end"}}></FontAwesome>
          </TouchableOpacity>
          <Text style={{textAlign:"center", fontWeight: "bold", fontSize: 25}}>Settings</Text>  
          </View>
        </View>
      </Modal>

      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePhoto}
            source={require('../../assets/bg.jpg')}
          />
          <Text style={styles.nameText}>Your Name</Text>
        </View>
      </View>
      {/* <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          About you
        </Text>
      </View>     */}


      {/* <Image source={require('../../assets/Logo1_dark.png')} style={{width:"60%", height:60, marginTop: 30, marginBottom:10, alignSelf:"center"}}></Image> */}
      <View style={{flexDirection:"row", justifyContent: "space-around", alignItems: "center"}}>
      <View style={styles.inputContainer}>
      <TextInput
          placeholder="What's on your mind?"
          value={status}
          onChangeText={(text) => setStatus(text)}
          multiline
          style={styles.input}
        />
        </View>
        <TouchableOpacity onPress={handleImagePicker} style={{alignSelf:'auto', marginEnd: 10, marginTop: 10}}>
          {image ? (
            <Image source={{ uri: image }} style={styles.imagePreview} />
          ) : (
            <FontAwesome name='camera' size={20}><Text style={{fontSize:15}}>  Add Image</Text></FontAwesome>
          )}
        </TouchableOpacity>
      </View>

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
  },
  headerContainer: {
    paddingTop: 20
  },
  coverPhoto: {
    width: '100%',
    height: 90,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bioContainer: {
    padding: 15,
  },
  bioText: {
    fontSize: 16,
    textAlign: "center"
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  statContainer: {
    alignItems: 'center',
    flex: 1,
  },
  statCount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: '#999',
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 3, 
    borderColor: '#ddd',
    backgroundColor: "white",
    marginTop: 15,
    marginLeft: 5,
    borderRadius: 20,
    width: '60%',
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
    width: "30%",
    marginLeft: 68,
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

export default ProfileScreen;