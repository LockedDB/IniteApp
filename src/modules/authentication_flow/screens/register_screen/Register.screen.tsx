import { TextInput, TouchableOpacity, View } from 'react-native';

import React, { useState } from 'react';
import { CustomText } from '@/components/CustomText';
import { useDispatch } from 'react-redux';
import { registerRequest } from '@/modules/authentication_flow/redux/auth/slice';
import styles from './styles';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    dispatch(registerRequest({ email, password }));
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Register</CustomText>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <CustomText style={styles.buttonText}>Register</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
