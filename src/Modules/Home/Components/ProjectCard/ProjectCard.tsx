import { CategoryTag } from '@components/CategoryTag';
import { CustomText } from '@components/CustomText';
import { Divider } from '@components/Divider';
import { MoreVertical } from 'Assets/SVG';
import { TouchableHighlight, TouchableOpacity, View } from 'react-native';
import AddTopicButton from './AddTopicButton/AddTopicButton';
import ProjectCardFooter from './ProjectCardFooter/ProjectCardFooter';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { PROJECT_DETAILS_SCREEN } from 'Modules/Navigation/paths';
import { GenericNavigation } from 'Modules/Navigation/types';

export const ProjectCard = () => {
  // TODO: Add logic here
  const { push } = useNavigation<GenericNavigation>();

  const onNavigateToTopicDetails = () => {
    push(PROJECT_DETAILS_SCREEN, { id: '1' });
  };

  const onMoreVerticalPress = () => {
    // TODO: Open menu
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
            Pages “About” and “Careers”
          </CustomText>
          <CustomText style={styles.description}>
            All the details are in the file, I’m sure it will turn out cool!
            Let’s do the exact opposite of the first concept.
          </CustomText>
          <CustomText style={[styles.description, styles.bullet]}>
            {`\u2022 Let’s talk about the kitchen!\n`}
            {`\u2022 There was an issue with the delivery`}
          </CustomText>
        </TouchableOpacity>

        <Divider />

        <AddTopicButton />
      </View>

      {/* Footer */}
      <ProjectCardFooter />
    </View>
  );
};
