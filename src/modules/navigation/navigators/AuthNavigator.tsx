import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  INTRO_SCREEN_1,
  INTRO_SCREEN_2,
  LOGIN_SCREEN,
  NEW_USER_PROFILE_SCREEN,
  REGISTER_SCREEN,
  WELCOME_SCREEN,
} from '@/modules/navigation/paths';
import { Black } from '@/utils/colors';
import {
  LoginScreen,
  RegisterScreen,
  WelcomeScreen,
} from '@/modules/authentication_flow/screens';
import { NewUserProfileScreen } from '@/modules/authentication_flow/screens/new_user_profile_screen/NewUserProfile.screen';
import IntroScreen01 from '@/modules/authentication_flow/screens/onboarding_screen/Intro1.screen';
import IntroScreen02 from '@/modules/authentication_flow/screens/onboarding_screen/Intro2.screen';

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => (
  <AuthStack.Navigator
    initialRouteName={INTRO_SCREEN_1}
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: Black },
    }}>
    <AuthStack.Group
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <AuthStack.Screen name={INTRO_SCREEN_1} component={IntroScreen01} />
      <AuthStack.Screen name={INTRO_SCREEN_2} component={IntroScreen02} />
      <AuthStack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <AuthStack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
      <AuthStack.Screen
        name={NEW_USER_PROFILE_SCREEN}
        component={NewUserProfileScreen}
      />
    </AuthStack.Group>
    <AuthStack.Screen name={WELCOME_SCREEN} component={WelcomeScreen} />
  </AuthStack.Navigator>
);
