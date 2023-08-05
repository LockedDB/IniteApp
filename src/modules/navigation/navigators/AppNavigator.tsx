import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DRAWER_NAVIGATOR,
  PROJECT_DETAILS_SCREEN,
  TOPICS_DETAILS_SCREEN,
} from '@/modules/navigation/paths';
import { Black } from '@/utils/colors';
import { ProjectDetailsScreen } from '@/modules/ProjectDetails/Screens/ProjectDetails.screen';
import { TopicDetailScreen } from '@/modules/TopicDetails/Screens/TopicDetails.screen';
import { DrawerNavigator } from '@/modules/navigation/navigators/DrawerNavigator';

const AppStack = createNativeStackNavigator();

export const AppNavigator = () => (
  <AppStack.Navigator
    initialRouteName={DRAWER_NAVIGATOR}
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: Black },
    }}>
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
