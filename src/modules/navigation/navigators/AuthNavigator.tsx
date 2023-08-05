import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
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

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => (
  <AuthStack.Navigator
    initialRouteName={WELCOME_SCREEN}
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: Black },
    }}>
    <AuthStack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    <AuthStack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
    <AuthStack.Screen
      name={NEW_USER_PROFILE_SCREEN}
      component={NewUserProfileScreen}
    />
    <AuthStack.Screen name={WELCOME_SCREEN} component={WelcomeScreen} />
  </AuthStack.Navigator>
);
