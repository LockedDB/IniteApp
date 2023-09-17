import {
  useFetchProfile,
  useFetchProjects,
} from '@/modules/home/Screens/HomeScreen/hooks';
import { useBlurModal } from '@/components/BlurModal';
import { CustomText } from '@/components/CustomText';
import styles from './styles';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Menu, NoData } from '@/assets/SVG';
import { ListFooter, ProjectCard } from '@/modules/home/Components';
import React from 'react';
import { TopBar } from '@/components/TopBar';
import { CustomSafeAreaView } from '@/components/CustomSafeAreaView';
import { AddingContentModal } from '@/modules/home/Components/AddProjectModal';
import { Project } from '@/Models/project';
import LoadingComponent from '@/components/LoadingComponent/LoadingComponent';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { GenericNavigation } from '@/modules/navigation/types';
import { useDispatch } from 'react-redux';
import { dispatchCreateProject } from '@/modules/Project/Redux/actions';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

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
  const dispatch = useDispatch();
  const { isModalVisible, onCloseModal, onOpenModal } = useBlurModal();
  const { projects, isLoading, isError, fetchProjects } = useFetchProjects();

  useFetchProfile();

  const onSubmit = (name: string, description: string) => {
    dispatch(dispatchCreateProject.Request({ name, description }));
  };

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
        ListEmptyComponent={
          <View>
            <Animated.View
              entering={FadeInUp.delay(200).duration(1000).springify()}
              style={{ flex: 1, alignSelf: 'center' }}>
              <NoData width={240} height={240} />
            </Animated.View>
            <Animated.Text
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={{
                opacity: 0.5,
                marginTop: 16,
                fontSize: 20,
                color: 'white',
                textAlign: 'center',
              }}>
              {
                "Things are looking pretty empty here! Let's create a project already!"
              }
            </Animated.Text>
          </View>
        }
      />

      <ListFooter onPress={onOpenModal} />
      <AddingContentModal
        isVisible={isModalVisible}
        onClose={onCloseModal}
        type="project"
        onSubmit={onSubmit}
      />

      <LoadingComponent isLoading={isLoading} />
    </CustomSafeAreaView>
  );
};
