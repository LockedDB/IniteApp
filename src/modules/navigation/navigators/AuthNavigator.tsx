import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  WELCOME_SCREEN,
} from '@/modules/navigation/paths';
import { Black } from '@/utils/colors';
import {
  LoginScreen,
  RegisterScreen,
  WelcomeScreen,
} from '@/modules/authentication_flow/screens';

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
    <AuthStack.Screen name={WELCOME_SCREEN} component={WelcomeScreen} />
  </AuthStack.Navigator>
);
