import { ArrowBack, MoreVertical } from '@/assets/SVG';
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { TopicRow } from '../Components/TopicRow';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GenericNavigation, ScreenRouteType } from '@/modules/navigation/types';
import { CustomText } from '@/components/CustomText';
import { TopBar } from '@/components/TopBar';
import { Divider } from '@/components/Divider';
import { AddListButton } from '@/components/AddListButton';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '@/reducers/reducers';
import {
  getTopicByProjectId,
  selectIsTopicLoading,
} from '@/modules/Topic/Redux/selectors';
import { TOPICS_DETAILS_SCREEN } from '@/modules/navigation/paths';
import { Topic } from '@/Models/topic';
import { getProjectById } from '@/modules/Project/Redux/selectors';
import { TagList } from '@/components/TagList/TagList';
import { Project } from '@/Models/project';
import { CustomSafeAreaView } from '@/components/CustomSafeAreaView';
import { AddingContentModal } from '@/modules/home/Components/AddProjectModal';
import { useBlurModal } from '@/components/BlurModal';
import { dispatchCreateTopic } from '@/modules/Topic/Redux/actions';
import LoadingComponent from '@/components/LoadingComponent/LoadingComponent';

const renderItem = ({ item }: { item: Topic }) => <TopicRow item={item} />;

const ListHeader = ({ project }: { project: Project }) => (
  <>
    <View style={styles.header}>
      <CustomText style={styles.title} fontStyle="black">
        {project?.name}
      </CustomText>
      <CustomText style={styles.description}>{project?.description}</CustomText>
      {project.tags && (
        <View style={styles.tagContainer}>
          <TagList tags={project.tags} />
        </View>
      )}
    </View>

    <Divider />

    <View style={styles.listHeader}>
      <CustomText fontStyle="bold" style={styles.listTitle}>
        List of Topics
      </CustomText>
    </View>
  </>
);

export const ProjectDetailsScreen = () => {
  const { isModalVisible, onCloseModal, onOpenModal } = useBlurModal();
  const { goBack } = useNavigation<GenericNavigation>();
  const params =
    useRoute<ScreenRouteType<typeof TOPICS_DETAILS_SCREEN>>().params;
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsTopicLoading);

  const { project, topics } = useSelector((state: StoreState) => ({
    project: getProjectById(state, params?.id),
    topics: getTopicByProjectId(state, params?.id),
  }));

  if (!project || !topics) return <LoadingComponent />;

  const onSubmit = (name: string) => {
    if (!project) return;

    dispatch(
      dispatchCreateTopic.Request({ projectId: project.id, topicName: name }),
    );
  };

  return (
    <CustomSafeAreaView>
      <View style={styles.headerContainer}>
        <TopBar
          leftComponent={
            <TouchableOpacity onPress={goBack}>
              <ArrowBack color={'white'} />
            </TouchableOpacity>
          }
          rightComponent={<MoreVertical />}
        />
      </View>

      <FlatList
        data={topics}
        stickyHeaderHiddenOnScroll
        maxToRenderPerBatch={6}
        renderItem={renderItem}
        ListHeaderComponent={<ListHeader project={project} />}
        stickyHeaderIndices={[0]}
        contentContainerStyle={styles.list}
      />

      <View style={styles.buttonContainer}>
        <AddListButton onPress={onOpenModal} />
      </View>

      <AddingContentModal
        type="topic"
        isVisible={isModalVisible}
        onClose={onCloseModal}
        onSubmit={onSubmit}
      />

      <LoadingComponent isLoading={isLoading} />
    </CustomSafeAreaView>
  );
};
