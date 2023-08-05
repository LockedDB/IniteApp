import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { OptionsCommon } from 'react-native-image-picker/src/types';
import { useDispatch } from 'react-redux';
import { saveUserRequest } from '@/modules/authentication_flow/redux/profile/slice';

export const NewUserProfileScreen = () => {
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState('');
  const [uri, setUri] = useState<string>('');

  const handleChoosePhoto = async () => {
    const options = {
      mediaType: 'photo',
    } as OptionsCommon;

    await launchImageLibrary(options, response => {
      if (
        !response.didCancel &&
        !response.errorMessage &&
        response.assets &&
        response.assets[0].uri
      ) {
        setUri(response.assets[0].uri);
      }
    });
  };

  const handleSaveProfile = () => {
    dispatch(saveUserRequest({ displayName, uri: uri }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Your Profile</Text>
      {uri && <Image source={{ uri }} style={styles.photo} />}
      <TextInput
        style={styles.input}
        placeholder="Display Name"
        placeholderTextColor="#888"
        onChangeText={setDisplayName}
        value={displayName}
      />
      <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
        <Text style={styles.buttonText}>Choose Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#444',
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
