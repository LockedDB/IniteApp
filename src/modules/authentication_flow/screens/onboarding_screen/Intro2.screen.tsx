import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigation } from '@/modules/navigation/types';
import { INTRO_2_DATA } from '@/modules/authentication_flow/screens/onboarding_screen/data/data';
import ScreenIndicators from './components/ScreenIndicators';
import React from 'react';
import PrimaryButton from '@/modules/authentication_flow/screens/onboarding_screen/components/PrimaryButton';
import { INTRO_SCREEN_1, LOGIN_SCREEN } from '@/modules/navigation/paths';
import { ArrowBack, OnbMeditate } from '@/assets/SVG';

const IntroScreen02 = () => {
  const navigation = useNavigation<GenericNavigation>();

  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          style={{
            paddingHorizontal: 24,
            height: 52,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => navigation.replace(INTRO_SCREEN_1)}>
            <ArrowBack color={'white'} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <OnbMeditate width={240} height={240} />
        </Animated.View>
      </View>
      <View style={{ padding: 24 }}>
        <Animated.Text
          entering={FadeInDown.duration(1000).springify()}
          style={{ fontSize: 40, fontWeight: '800', color: 'white' }}>
          {INTRO_2_DATA.title}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(1000).springify()}
          style={{
            opacity: 0.5,
            marginTop: 16,
            fontSize: 16,
            color: 'white',
          }}>
          {INTRO_2_DATA.description}
        </Animated.Text>
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}>
          <ScreenIndicators count={2} activeIndex={1} />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          style={{ alignItems: 'center' }}>
          <PrimaryButton
            label="Next"
            onPress={() => navigation.replace(LOGIN_SCREEN)}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen02;
