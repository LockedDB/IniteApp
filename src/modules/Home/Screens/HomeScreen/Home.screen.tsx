import { useFetchProjects } from '@/modules/Home/Screens/HomeScreen/hooks';
import { useBlurModal } from '@/components/BlurModal';
import { CustomText } from '@/components/CustomText';
import styles from './styles';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Menu } from '@/assets/SVG';
import { ListFooter, ProjectCard } from '@/modules/Home/Components';
import React from 'react';
import { TopBar } from '@/components/TopBar';
import { CustomSafeAreaView } from '@/components/CustomSafeAreaView';
import { AddProjectModal } from '@/modules/Home/Components/AddProjectModal';
import { Project } from '@/Models/project';
import LoadingComponent from '@/components/LoadingComponent/LoadingComponent';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { GenericNavigation } from '@/modules/Navigation/types';

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

const Header = () => {
  const navigation = useNavigation<GenericNavigation>();

  const onMenuPressed = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.topBarContainer}>
      <TopBar
        leftComponent={<Title />}
        rightComponent={<MenuBar onPress={onMenuPressed} />}
      />
    </View>
  );
};

const renderItem = ({ item }: { item: Project }) => <ProjectCard item={item} />;

export const HomeScreen = () => {
  const { isModalVisible, onCloseModal, onOpenModal } = useBlurModal();
  const { projects, isLoading, isError, fetchProjects } = useFetchProjects();

  return (
    <CustomSafeAreaView>
      <FlatList
        data={projects}
        maxToRenderPerBatch={3}
        stickyHeaderIndices={[0]}
        renderItem={renderItem}
        ListHeaderComponent={Header}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentList}
      />

      <ListFooter onPress={onOpenModal} />
      <AddProjectModal isVisible={isModalVisible} onClose={onCloseModal} />

      <LoadingComponent isLoading={isLoading} />
    </CustomSafeAreaView>
  );
};
