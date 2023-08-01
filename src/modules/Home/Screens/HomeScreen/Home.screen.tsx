import { useFetchProjects } from '@/modules/Home/Screens/HomeScreen/hooks';
import { useBlurModal } from '@/components/BlurModal';
import { CustomText } from '@/components/CustomText';
import styles from './styles';
import {
  Button,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
} from 'react-native';
import { Menu } from '@/assets/SVG';
import { ListFooter, ProjectCard } from '@/modules/Home/Components';
import React, { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { CustomSafeAreaView } from '@/components/CustomSafeAreaView';
import { AddProjectModal } from '@/modules/Home/Components/AddProjectModal';
import { BottomSheet } from '@/components/BottomSheet/BottomSheet';

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

export const HomeScreen = () => {
  const [isOpen, setOpen] = useState(false);
  const { isModalVisible, onCloseModal, onOpenModal } = useBlurModal();
  const { projects, isLoading, isError, fetchProjects } = useFetchProjects();

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
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={fetchProjects}
            tintColor={'white'}
          />
        }
        renderItem={renderProjectCard}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.toString()}
        contentContainerStyle={styles.contentList}
      />

      {/* TODO: Change this */}
      <ListFooter onPress={() => setOpen(!isOpen)} />
      <AddProjectModal isVisible={isModalVisible} onClose={onCloseModal} />
      <BottomSheet isOpen={isOpen} onToggle={() => setOpen(!isOpen)}>
        <Button title="Edit" />
        <Button title="Remove" />
      </BottomSheet>
    </CustomSafeAreaView>
  );
};
