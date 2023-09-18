import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HOME_SCREEN,
  PROJECT_DETAILS_SCREEN,
  TOPICS_DETAILS_SCREEN,
} from '@/modules/navigation/paths';
import { Black } from '@/utils/colors';
import { ProjectDetailsScreen } from '@/modules/ProjectDetails/Screens/ProjectDetails.screen';
import { TopicDetailScreen } from '@/modules/TopicDetails/Screens/TopicDetails.screen';
import { HomeScreen } from '@/modules/home/Screens/HomeScreen/Home.screen';

const AppStack = createNativeStackNavigator();

export const AppNavigator = () => (
  <AppStack.Navigator
    initialRouteName={HOME_SCREEN}
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: Black },
    }}>
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
