import { HomeScreen } from '@/modules/Home/Screens/HomeScreen/Home.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DRAWER_NAVIGATOR,
  HOME_SCREEN,
  PROJECT_DETAILS_SCREEN,
  TOPICS_DETAILS_SCREEN,
} from './paths';
import { ProjectDetailsScreen } from '@/modules/ProjectDetails/Screens/ProjectDetails.screen';
import { TopicDetailScreen } from '@/modules/TopicDetails/Screens/TopicDetails.screen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName={HOME_SCREEN}
    screenOptions={{ headerShown: false }}>
    <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
  </Drawer.Navigator>
);

const AppStack = createNativeStackNavigator();

export const AppNavigator = () => (
  <AppStack.Navigator
    initialRouteName={DRAWER_NAVIGATOR}
    screenOptions={{ headerShown: false }}>
    <AppStack.Screen name={DRAWER_NAVIGATOR} component={DrawerNavigator} />
    <AppStack.Screen
      name={PROJECT_DETAILS_SCREEN}
      component={ProjectDetailsScreen}
    />
    <AppStack.Screen
      name={TOPICS_DETAILS_SCREEN}
      component={TopicDetailScreen}
    />
  </AppStack.Navigator>
);
