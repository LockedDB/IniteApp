import { ArrowBack, MoreVertical } from '@/assets/SVG';
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { TopicRow } from '../Components/TopicRow';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GenericNavigation, ScreenRouteType } from '@/modules/Navigation/types';
import { CustomText } from '@/components/CustomText';
import { TopBar } from '@/components/TopBar';
import { Divider } from '@/components/Divider';
import { AddListButton } from '@/components/AddListButton';
import { useSelector } from 'react-redux';
import { StoreState } from '@/reducers/reducers';
import { getTopicByProjectId } from '@/modules/Topic/Redux/selectors';
import { TOPICS_DETAILS_SCREEN } from '@/modules/Navigation/paths';
import { Topic } from '@/Models/topic';
import { getProjectById } from '@/modules/Project/Redux/selectors';
import { TagList } from '@/components/TagList/TagList';
import { Project } from '@/Models/project';
import { CustomSafeAreaView } from '@/components/CustomSafeAreaView';

const renderItem = ({ item }: { item: Topic }) => <TopicRow item={item} />;

const ListHeader = ({ project }: { project?: Project }) => (
  <>
    <View style={styles.header}>
      <CustomText style={styles.title} fontStyle="black">
        {project?.name}
      </CustomText>
      <CustomText style={styles.description}>{project?.description}</CustomText>
      <View style={styles.tagContainer}>
        <TagList tags={project?.tags} />
      </View>
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
  const { goBack } = useNavigation<GenericNavigation>();
  const params =
    useRoute<ScreenRouteType<typeof TOPICS_DETAILS_SCREEN>>().params;

  const { project, topics } = useSelector((state: StoreState) => ({
    project: getProjectById(state, params?.id),
    topics: getTopicByProjectId(state, params?.id),
  }));

  return (
    <CustomSafeAreaView>
      <View style={styles.headerContainer}>
        <TopBar
          leftComponent={
            <TouchableOpacity onPress={goBack}>
              <ArrowBack />
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
        <AddListButton onPress={() => {}} />
      </View>
    </CustomSafeAreaView>
  );
};
