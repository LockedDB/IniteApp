import { SafeAreaView, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import React from 'react';
import ScreenIndicators from './components/ScreenIndicators';
import { INTRO_1_DATA } from '@/modules/authentication_flow/screens/onboarding_screen/data/data';
import PrimaryButton from '@/modules/authentication_flow/screens/onboarding_screen/components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigation } from '@/modules/navigation/types';
import { INTRO_SCREEN_2 } from '@/modules/navigation/paths';
import { OnbLost } from '@/assets/SVG';

const IntroScreen01 = () => {
  const navigation = useNavigation<GenericNavigation>();
  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}>
          <OnbLost />
        </Animated.View>
      </View>
      <View style={{ padding: 24 }}>
        <Animated.Text
          entering={FadeInDown.duration(1000).springify()}
          style={{ fontSize: 40, fontWeight: '800', color: 'white' }}>
          {INTRO_1_DATA.title}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(1000).springify()}
          style={{
            opacity: 0.5,
            marginTop: 16,
            fontSize: 16,
            color: 'white',
          }}>
          {INTRO_1_DATA.description}
        </Animated.Text>
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}>
          <ScreenIndicators count={2} activeIndex={0} />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          style={{ alignItems: 'center' }}>
          <PrimaryButton
            label="Next"
            onPress={() => navigation.replace(INTRO_SCREEN_2)}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen01;
