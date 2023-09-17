import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  cleanError,
  loginRequest,
} from '@/modules/authentication_flow/redux/auth/slice';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigation } from '@/modules/navigation/types';
import { INTRO_SCREEN_2 } from '@/modules/navigation/paths';
import { ArrowBack, OnbLogin } from '@/assets/SVG';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { LOG_IN_SCREEN } from '@/modules/authentication_flow/screens/onboarding_screen/data/data';
import PrimaryButton from '@/modules/authentication_flow/screens/onboarding_screen/components/PrimaryButton';
import { selectErrorAuth } from '@/modules/authentication_flow/redux/auth/selectors';

export const LoginScreen = () => {
  const navigation = useNavigation<GenericNavigation>();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dimensions = useWindowDimensions();
  const error = useSelector(selectErrorAuth);

  const handleLogin = () => {
    // Handle login logic here
    dispatch(loginRequest({ email, password }));
  };

  const handleGoBack = () => {
    dispatch(cleanError());
    navigation.replace(INTRO_SCREEN_2);
  };

  return (
    <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'black',
          minHeight: dimensions.height,
        }}>
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowBack
            color={'white'}
            style={{ marginLeft: 24, marginTop: 16 }}
          />
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <Animated.View
            entering={FadeInUp.delay(200).duration(1000).springify()}
            style={{
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
            }}>
            <OnbLogin width={240} height={240} />
          </Animated.View>
        </View>

        <View style={{ padding: 24 }}>
          {error && (
            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
              style={{
                borderRadius: 8,
                marginBottom: 16,
                padding: 8,
                backgroundColor: '#FFCCCC',
              }}>
              <Text style={{ color: 'black', fontSize: 16 }}>{error}</Text>
            </Animated.View>
          )}

          <Animated.Text
            entering={FadeInDown.duration(1000).springify()}
            style={{
              fontSize: 40,
              fontWeight: '800',
              color: 'white',
            }}>
            {LOG_IN_SCREEN.title}
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(100).duration(1000).springify()}
            style={{
              opacity: 0.5,
              marginTop: 16,
              fontSize: 16,
              color: 'white',
            }}>
            {LOG_IN_SCREEN.description}
          </Animated.Text>

          <View style={{ alignItems: 'center', gap: 16, marginTop: 32 }}>
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={{ position: 'relative', width: '100%' }}>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Your Email"
                autoCapitalize="none"
                placeholderTextColor={'white'}
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: 'white',
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  width: '100%',
                }}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={{ position: 'relative', width: '100%' }}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                placeholder="Your Password"
                placeholderTextColor={'white'}
                secureTextEntry
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: 'white',
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  width: '100%',
                }}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}>
              <PrimaryButton label="Log In" onPress={handleLogin} />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
