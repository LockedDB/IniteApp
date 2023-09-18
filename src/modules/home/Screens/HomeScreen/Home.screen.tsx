import {
  useFetchProfile,
  useFetchProjects,
} from '@/modules/home/Screens/HomeScreen/hooks';
import { useBlurModal } from '@/components/BlurModal';
import { CustomText } from '@/components/CustomText';
import styles from './styles';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { NoData } from '@/assets/SVG';
import { ProjectCard } from '@/modules/home/Components';
import React from 'react';
import { TopBar } from '@/components/TopBar';
import { CustomSafeAreaView } from '@/components/CustomSafeAreaView';
import { AddingContentModal } from '@/modules/home/Components/AddProjectModal';
import { Project } from '@/Models/project';
import LoadingComponent from '@/components/LoadingComponent/LoadingComponent';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigation } from '@/modules/navigation/types';
import { useDispatch } from 'react-redux';
import { dispatchCreateProject } from '@/modules/Project/Redux/actions';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import PrimaryButton from '@/modules/authentication_flow/screens/onboarding_screen/components/PrimaryButton';
import { PROFILE_SCREEN } from '@/modules/navigation/paths';

const testImage = require('../../../../assets/png/test_user.png');

const Title = () => (
  <CustomText fontStyle="black" style={styles.title}>
    Projects
  </CustomText>
);

const MenuBar = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity hitSlop={20} onPress={onPress}>
    <Image
      source={testImage}
      style={{
        width: 32,
        height: 32,
        borderRadius: 24,
        borderColor: 'white',
        borderWidth: 1,
      }}
    />
  </TouchableOpacity>
);

const Header = () => {
  const navigation = useNavigation<GenericNavigation>();

  const onMenuPressed = () => {
    navigation.navigate(PROFILE_SCREEN);
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
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Animated.View
              entering={FadeInUp.delay(200).duration(1000).springify()}
              style={{
                alignSelf: 'center',
              }}>
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

      <View style={{ padding: 24 }}>
        <PrimaryButton
          label="+"
          labelStyle={{ fontSize: 24 }}
          onPress={onOpenModal}
        />
      </View>

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
