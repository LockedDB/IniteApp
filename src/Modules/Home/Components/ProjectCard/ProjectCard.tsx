import { CustomText } from '@components/CustomText';
import { Divider } from '@components/Divider';
import { View } from 'react-native';
import AddTopicButton from './AddTopicButton/AddTopicButton';
import ProjectCardFooter from './ProjectCardFooter/ProjectCardFooter';
import styles from './styles';

const ProjectCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.topCard}>
        {/* header */}
        <View></View>

        {/* body */}
        <CustomText fontStyle="bold" style={styles.title}>
          Pages “About” and “Careers”
        </CustomText>
        <CustomText style={styles.description}>
          All the details are in the file, I’m sure it will turn out cool! Let’s
          do the exact opposite of the first concept.
        </CustomText>
        <CustomText style={[styles.description, styles.bullet]}>
          {`\u2022 Let’s talk about the kitchen!\n`}
          {`\u2022 There was an issue with the delivery`}
        </CustomText>

        <Divider />

        <AddTopicButton />
      </View>

      {/* Footer */}
      <ProjectCardFooter />
    </View>
  );
};

export default ProjectCard;
