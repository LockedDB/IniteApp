import { CustomSafeAreaView } from '@components/CustomSafeAreaView';
import { CustomText } from '@components/CustomText';
import { TopBar } from '@components/TopBar';
import { Menu } from 'Assets/SVG';
import { ListFooter, ProjectCard } from 'Modules/Home/Components';
import { FlatList, TouchableOpacity, View } from 'react-native';
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

  const data = [1, 2, 3]; // This should be replaced with your actual data

  const renderProjectCard = ({ item }: { item: number }) => <ProjectCard />;

  const renderHeader = () => (
    <View style={styles.topBarContainer}>
      <TopBar
        leftComponent={<Title />}
        rightComponent={<MenuBar onPress={onMenuPressed} />}
      />
    </View>
  );

  return (
    <CustomSafeAreaView>
      <FlatList
        data={data}
        maxToRenderPerBatch={3}
        stickyHeaderIndices={[0]}
        renderItem={renderProjectCard}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.toString()}
        contentContainerStyle={styles.contentList}
      />

      <ListFooter />
    </CustomSafeAreaView>
  );
};

export default HomeScreen;
