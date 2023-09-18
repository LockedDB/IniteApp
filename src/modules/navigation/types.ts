import {
  HOME_SCREEN,
  INTRO_SCREEN_1,
  INTRO_SCREEN_2,
  LOGIN_SCREEN,
  NEW_USER_PROFILE_SCREEN,
  PROFILE_SCREEN,
  PROJECT_DETAILS_SCREEN,
  REGISTER_SCREEN,
  TOPICS_DETAILS_SCREEN,
  WELCOME_SCREEN,
} from './paths';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  createNavigationContainerRef,
  RouteProp,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export type ScreenList = {
  [HOME_SCREEN]: undefined;
  [PROJECT_DETAILS_SCREEN]: { id: string };
  [TOPICS_DETAILS_SCREEN]: { id: string };
  [LOGIN_SCREEN]: undefined;
  [REGISTER_SCREEN]: undefined;
  [NEW_USER_PROFILE_SCREEN]: undefined;
  [WELCOME_SCREEN]: undefined;
  [INTRO_SCREEN_1]: undefined;
  [INTRO_SCREEN_2]: undefined;
  [PROFILE_SCREEN]: undefined;
};

export type ScreenListKeys = keyof ScreenList;

export type ScreenNavigationType<T extends ScreenListKeys = ScreenListKeys> =
  NativeStackNavigationProp<ScreenList, T>;

export type ScreenRouteType<S extends ScreenListKeys> = RouteProp<
  ScreenList,
  S
>;

export type GenericNavigation = ScreenNavigationType;
