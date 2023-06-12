import { CustomSafeAreaView } from '@components/CustomSafeAreaView';
import { CustomText } from '@components/CustomText';
import { TopBar } from 'Components/TopBar';
import { View } from 'react-native';
import styles from './styles';
import { Menu } from 'Assets/SVG';

const HomeScreen = () => {
  return (
    <CustomSafeAreaView>
      <View style={styles.topBarContainer}>
        <TopBar
          leftComponent={<CustomText>Projects</CustomText>}
          rightComponent={<Menu />}
        />
      </View>
    </CustomSafeAreaView>
  );
};

export default HomeScreen;
