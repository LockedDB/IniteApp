import {
  HOME_SCREEN,
  PROJECT_DETAILS_SCREEN,
  TOPICS_DETAILS_SCREEN,
} from './paths';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type ScreenList = {
  [HOME_SCREEN]: undefined;
  [PROJECT_DETAILS_SCREEN]: { id: string };
  [TOPICS_DETAILS_SCREEN]: { id: string };
};

export type ScreenListKeys = keyof ScreenList;

export type ScreenNavigationType<T extends ScreenListKeys = ScreenListKeys> =
  NativeStackNavigationProp<ScreenList, T>;

export type ScreenRouteType<S extends ScreenListKeys> = RouteProp<
  ScreenList,
  S
>;

export type GenericNavigation = ScreenNavigationType;
