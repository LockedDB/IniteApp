import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { OptionsCommon } from 'react-native-image-picker/src/types';
import { useDispatch } from 'react-redux';
import { saveUserRequest } from '@/modules/authentication_flow/redux/profile/slice';
import { ImagePlaceholder, OnbAlmost } from '@/assets/SVG';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import PrimaryButton from '@/modules/authentication_flow/screens/onboarding_screen/components/PrimaryButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NEW_USER_DATA } from '@/modules/authentication_flow/screens/onboarding_screen/data/data';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export const NewUserProfileScreen = () => {
  const { height } = useWindowDimensions();
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState('');
  const [uri, setUri] = useState<string>('');
  const { bottom } = useSafeAreaInsets();

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
    dispatch(saveUserRequest({ displayName, uri }));
  };

  return (
    <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, minHeight: height - bottom }}>
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Animated.View
              entering={FadeInUp.delay(200).duration(1000).springify()}
              style={{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
              }}>
              <OnbAlmost width={240} height={240} />
            </Animated.View>
          </View>
          <View style={{ padding: 24, gap: 24 }}>
            <View>
              <Animated.Text
                entering={FadeInDown.duration(1000).springify()}
                style={{
                  fontSize: 40,
                  fontWeight: '800',
                  color: 'white',
                }}>
                {NEW_USER_DATA.title}
              </Animated.Text>
              <Animated.Text
                entering={FadeInDown.delay(100).duration(1000).springify()}
                style={{
                  opacity: 0.5,
                  marginTop: 16,
                  fontSize: 16,
                  color: 'white',
                }}>
                {NEW_USER_DATA.description}
              </Animated.Text>
            </View>
            {uri !== '' ? (
              <AnimatedTouchable
                onPress={handleChoosePhoto}
                entering={FadeInUp.duration(1000).springify()}>
                <Image source={{ uri }} style={styles.photo} />
              </AnimatedTouchable>
            ) : (
              <AnimatedTouchable
                onPress={handleChoosePhoto}
                entering={FadeInUp.duration(1000).springify()}>
                <ImagePlaceholder />
              </AnimatedTouchable>
            )}

            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={{ position: 'relative', width: '100%' }}>
              <TextInput
                value={displayName}
                onChangeText={setDisplayName}
                placeholder="Display name"
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
          </View>

          <View>
            <Animated.View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                gap: 12,
                justifyContent: 'space-between',
              }}
              entering={FadeInDown.delay(400).duration(1000).springify()}>
              <PrimaryButton label="Save Profile" onPress={handleSaveProfile} />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
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
