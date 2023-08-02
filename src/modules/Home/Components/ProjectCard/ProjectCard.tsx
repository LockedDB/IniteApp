import { CustomText } from '@/components/CustomText';
import { Divider } from '@/components/Divider';
import { Button, TouchableOpacity, View } from 'react-native';
import AddTopicButton from './AddTopicButton/AddTopicButton';
import ProjectCardFooter from './ProjectCardFooter/ProjectCardFooter';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { PROJECT_DETAILS_SCREEN } from '@/modules/Navigation/paths';
import { GenericNavigation } from '@/modules/Navigation/types';
import { useState } from 'react';
import { BottomSheet } from '@/components/BottomSheet/BottomSheet';
import { Project } from '@/Models/project';
import { dispatchDeleteProject } from '@/modules/Project/Redux/actions';
import { useDispatch } from 'react-redux';
import { MoreVertical } from '@/assets/SVG';
import { CategoryTag } from '@/components/CategoryTag';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

interface ProjectCardProps {
  item: Project;
}

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export const ProjectCard = ({ item }: ProjectCardProps) => {
  const { push } = useNavigation<GenericNavigation>();
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  const onNavigateToTopicDetails = () => {
    push(PROJECT_DETAILS_SCREEN, { id: '1' });
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
          {/* body */}
          {item.tags && (
            <View style={styles.tags}>
              {item.tags.map((tag, index) => (
                <CategoryTag colorIndex={index}>{tag}</CategoryTag>
              ))}
            </View>
          )}

          <View style={styles.gapping}>
            <CustomText fontStyle="bold" style={styles.title}>
              {item.name}
            </CustomText>
            <CustomText style={styles.description}>
              {item.description}
            </CustomText>
            <CustomText style={[styles.description, styles.bullet]}>
              {`\u2022 Let’s talk about the kitchen!\n`}
              {`\u2022 There was an issue with the delivery`}
            </CustomText>
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

      <BottomSheet isOpen={isOpen} onToggle={() => setOpen(!isOpen)}>
        <Button title="Edit" onPress={onEdit} />
        <Button title="Remove" onPress={onRemove} />
      </BottomSheet>

      {/* Footer */}
      <ProjectCardFooter />
    </AnimatedTouchableOpacity>
  );
};
