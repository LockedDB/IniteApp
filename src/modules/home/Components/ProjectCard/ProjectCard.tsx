import { CustomText } from '@/components/CustomText';
import { Divider } from '@/components/Divider';
import { TouchableOpacity, View } from 'react-native';
import AddTopicButton from './AddTopicButton/AddTopicButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { PROJECT_DETAILS_SCREEN } from '@/modules/navigation/paths';
import { GenericNavigation } from '@/modules/navigation/types';
import { Project } from '@/Models/project';
import { dispatchDeleteProject } from '@/modules/Project/Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { MoreVertical } from '@/assets/SVG';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { getTopicByProjectId } from '@/modules/Topic/Redux/selectors';
import { StoreState } from '@/reducers/reducers';
import { TopicNameList } from './TopicNameList/TopicNameList';
import { TagList } from '@/components/TagList/TagList';
import { OptionsBottomSheet } from '@/components/BottomSheet/components/OptionsBottomSheet';
import { useBottomSheetMethods } from '@/components/BottomSheet/hooks/useBottomSheetMethods';

interface ProjectCardProps {
  item: Project;
}

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export const ProjectCard = ({ item }: ProjectCardProps) => {
  const { push } = useNavigation<GenericNavigation>();
  const dispatch = useDispatch();
  const { onToggle, setOpen, isOpen } = useBottomSheetMethods();
  const topics = useSelector((state: StoreState) =>
    getTopicByProjectId(state, item.id),
  );

  const onNavigateToTopicDetails = () => {
    push(PROJECT_DETAILS_SCREEN, { id: item.id });
  };

  const onEdit = () => {};

  const onRemove = () => {
    dispatch(dispatchDeleteProject.Request({ projectId: item.id }));
  };

  const onMoreVerticalPress = () => {
    setOpen(!isOpen);
  };

  return (
    <AnimatedTouchableOpacity
      entering={FadeIn}
      exiting={FadeOut}
      onPress={onNavigateToTopicDetails}
      style={styles.card}>
      <View style={styles.container}>
        <View style={styles.topCard}>
          <TagList tags={item.tags} />

          <View style={styles.gapping}>
            <CustomText fontStyle="bold" style={styles.title}>
              {item.name}
            </CustomText>
            {item.description && (
              <CustomText style={styles.description}>
                {item.description}
              </CustomText>
            )}

            <TopicNameList
              topics={topics}
              line={({ topicName }) => `\u2022 ${topicName}\n`}
            />
          </View>

          <Divider />

          <AddTopicButton projectId={item.id} />
        </View>

        <TouchableOpacity
          style={styles.moreButtons}
          onPress={onMoreVerticalPress}>
          <MoreVertical />
        </TouchableOpacity>
      </View>

      <OptionsBottomSheet
        isOpen={isOpen}
        onToggle={onToggle}
        onRename={onEdit}
        onDelete={onRemove}
      />
    </AnimatedTouchableOpacity>
  );
};
