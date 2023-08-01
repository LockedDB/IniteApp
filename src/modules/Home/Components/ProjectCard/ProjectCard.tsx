import { CategoryTag } from '@/components/CategoryTag';
import { CustomText } from '@/components/CustomText';
import { Divider } from '@/components/Divider';
import { MoreVertical } from '@/assets/SVG';
import { Button, TouchableOpacity, View } from 'react-native';
import AddTopicButton from './AddTopicButton/AddTopicButton';
import ProjectCardFooter from './ProjectCardFooter/ProjectCardFooter';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { PROJECT_DETAILS_SCREEN } from '@/modules/Navigation/paths';
import { GenericNavigation } from '@/modules/Navigation/types';
import { useState } from 'react';
import { BottomSheet } from '@/components/BottomSheet/BottomSheet';
import { Project } from '@/modules/Project/Models/project';

interface ProjectCardProps {
  item: Project;
}

export const ProjectCard = ({ item }: ProjectCardProps) => {
  const { push } = useNavigation<GenericNavigation>();
  const [isOpen, setOpen] = useState(false);

  const onNavigateToTopicDetails = () => {
    push(PROJECT_DETAILS_SCREEN, { id: '1' });
  };

  const onMoreVerticalPress = () => {
    setOpen(!isOpen);
  };

  return (
    <View style={styles.card}>
      <View style={styles.topCard}>
        {/* header */}
        <View style={styles.header}>
          <View style={styles.tags}>
            <CategoryTag colorIndex={0}>Website</CategoryTag>
            <CategoryTag colorIndex={1}>App</CategoryTag>
            <CategoryTag colorIndex={2}>Planning</CategoryTag>
          </View>
          <TouchableOpacity onPress={onMoreVerticalPress}>
            <MoreVertical />
          </TouchableOpacity>
        </View>

        {/* body */}
        <TouchableOpacity
          style={styles.gapping}
          onPress={onNavigateToTopicDetails}>
          <CustomText fontStyle="bold" style={styles.title}>
            {item.name}
          </CustomText>
          <CustomText style={styles.description}>{item.description}</CustomText>
          <CustomText style={[styles.description, styles.bullet]}>
            {`\u2022 Let’s talk about the kitchen!\n`}
            {`\u2022 There was an issue with the delivery`}
          </CustomText>
        </TouchableOpacity>

        <Divider />

        <AddTopicButton />
      </View>

      <BottomSheet isOpen={isOpen} onToggle={() => setOpen(!isOpen)}>
        <Button title="Edit" />
        <Button title="Remove" />
      </BottomSheet>

      {/* Footer */}
      <ProjectCardFooter />
    </View>
  );
};
