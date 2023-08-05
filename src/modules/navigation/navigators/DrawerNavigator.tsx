import { HOME_SCREEN } from '@/modules/navigation/paths';
import { Black } from '@/utils/colors';
import { HomeScreen } from '@/modules/home/Screens/HomeScreen/Home.screen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName={HOME_SCREEN}
    screenOptions={{
      headerShown: false,
      sceneContainerStyle: { backgroundColor: Black },
    }}>
    <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
  </Drawer.Navigator>
);
