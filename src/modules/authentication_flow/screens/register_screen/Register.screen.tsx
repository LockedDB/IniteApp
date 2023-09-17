import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cleanError,
  registerRequest,
} from '@/modules/authentication_flow/redux/auth/slice';
import { ArrowBack, OnbRegister } from '@/assets/SVG';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { REGISTER_DATA } from '@/modules/authentication_flow/screens/onboarding_screen/data/data';
import PrimaryButton from '@/modules/authentication_flow/screens/onboarding_screen/components/PrimaryButton';
import { LOGIN_SCREEN } from '@/modules/navigation/paths';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigation } from '@/modules/navigation/types';
import { selectErrorAuth } from '@/modules/authentication_flow/redux/auth/selectors';
import { useMountEffect } from '@/utils/utils';

export const RegisterScreen = () => {
  const navigation = useNavigation<GenericNavigation>();
  const dimensions = useWindowDimensions();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(selectErrorAuth);

  const handleRegister = () => {
    dispatch(registerRequest({ email, password }));
  };

  useMountEffect(() => {
    dispatch(cleanError());

    return () => {
      dispatch(cleanError());
    };
  });

  const goBack = () => {
    navigation.replace(LOGIN_SCREEN);
  };

  return (
    <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'black',
          minHeight: dimensions.height,
        }}>
        <View>
          <Animated.View
            style={{
              marginHorizontal: 24,
              marginTop: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            entering={FadeInUp.duration(1000).springify()}>
            <TouchableOpacity onPress={goBack}>
              <ArrowBack color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={goBack}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  textDecorationLine: 'underline',
                }}>
                Log In
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <View style={{ flex: 1 }}>
          <Animated.View
            entering={FadeInUp.delay(200).duration(1000).springify()}
            style={{
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
            }}>
            <OnbRegister width={240} height={240} />
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
            {REGISTER_DATA.title}
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(100).duration(1000).springify()}
            style={{
              opacity: 0.5,
              marginTop: 16,
              fontSize: 16,
              color: 'white',
            }}>
            {REGISTER_DATA.description}
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
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
                justifyContent: 'space-between',
              }}
              entering={FadeInDown.delay(600).duration(1000).springify()}>
              <PrimaryButton label="Sign Up" onPress={handleRegister} />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
