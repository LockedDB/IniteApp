import { CustomText } from '@/components/CustomText';
import styles from '@/modules/Home/Components/ProjectCard/styles';
import { Topic } from '@/Models/topic';

export const TopicNameList = (props: {
  topics: Topic[];
  line: ({ topicName }: { topicName: string }) => string;
}) => (
  <CustomText style={[styles.description, styles.bullet]}>
    {props.topics.slice(0, 3).map(props.line)}
  </CustomText>
);
