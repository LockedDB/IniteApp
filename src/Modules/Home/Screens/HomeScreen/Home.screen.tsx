import { CustomSafeAreaView } from '@components/CustomSafeAreaView';
import { CustomText } from '@components/CustomText';
import { TopBar } from 'Components/TopBar';
import { View } from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  return (
    <CustomSafeAreaView>
      <View style={styles.topBarContainer}>
        <TopBar
          leftComponent={<CustomText>Projects</CustomText>}
          rightComponent={<CustomText>Menu</CustomText>}
        />
      </View>
    </CustomSafeAreaView>
  );
};

export default HomeScreen;
