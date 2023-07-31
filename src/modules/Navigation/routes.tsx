import { HomeScreen } from '@/modules/Home/Screens/HomeScreen/Home.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HOME_SCREEN,
  PROJECT_DETAILS_SCREEN,
  TOPICS_DETAILS_SCREEN,
} from './paths';
import { ProjectDetailsScreen } from '@/modules/ProjectDetails/Screens/ProjectDetails.screen';
import { TopicDetailScreen } from '@/modules/TopicDetails/Screens/TopicDetails.screen';

const AppStack = createNativeStackNavigator();

export const AppNavigator = () => (
  <AppStack.Navigator
    initialRouteName={HOME_SCREEN}
    screenOptions={{ headerShown: false }}>
    <AppStack.Screen name={HOME_SCREEN} component={HomeScreen} />
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
