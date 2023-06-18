import { CustomSafeAreaView } from '@components/CustomSafeAreaView';
import { CustomText } from '@components/CustomText';
import { Menu } from 'Assets/SVG';

import { TopBar } from '@components/TopBar';
import ProjectCard from 'Modules/Home/Components/ProjectCard/ProjectCard';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Title = () => (
  <CustomText fontStyle="black" style={styles.title}>
    Projects
  </CustomText>
);

const MenuBar = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity hitSlop={20} onPress={onPress}>
    <Menu />
  </TouchableOpacity>
);

const HomeScreen = () => {
  // TODO: Open navigation bar
  const onMenuPressed = () => {};

  return (
    <CustomSafeAreaView>
      <View style={styles.topBarContainer}>
        <TopBar
          leftComponent={<Title />}
          rightComponent={<MenuBar onPress={onMenuPressed} />}
        />
      </View>
      <View style={styles.list}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </View>
    </CustomSafeAreaView>
  );
};

export default HomeScreen;
