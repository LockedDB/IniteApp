import { View } from 'react-native';
import styles from './styles';
import { CustomText } from '@/components/CustomText';
import { UserBubble } from '@/components/UserBubble';
import { ContentIndicators } from '@/components/ContentIndicators';
import { useRoute } from '@react-navigation/native';
import { TOPICS_DETAILS_SCREEN } from '@/modules/navigation/paths';
import { ScreenRouteType } from '@/modules/navigation/types';
import { useSelector } from 'react-redux';
import { selectTopicById } from '@/modules/Topic/Redux/selectors';
import { StoreState } from '@/reducers/reducers';

interface TopicDetailsHeaderProps {}

export const TopicDetailsHeader = ({}: TopicDetailsHeaderProps) => {
  const {
    params: { id },
  } = useRoute<ScreenRouteType<typeof TOPICS_DETAILS_SCREEN>>();
  const topic = useSelector((state: StoreState) => selectTopicById(state, id));

  if (!topic) return null;

  const { topicName, members, nAttachments, nMessages } = topic;

  return (
    <View style={styles.container}>
      <CustomText style={styles.title} fontStyle="black">
        {topicName}
      </CustomText>

      <View style={styles.contentContainer}>
        <View style={styles.participantsContainer}>
          <View style={styles.bubblesContainer}>
            {members.map(member => (
              <UserBubble
                //TODO: Retrieve user data from participant id
                source={{ uri: 'https://picsum.photos/200/300.jpg' }}
              />
            ))}
          </View>
          <CustomText style={{ fontSize: 14 }}>{`${
            members.length
          } active participant${members.length > 1 ? 's' : ''}`}</CustomText>
        </View>
        <ContentIndicators
          chatBubbleCount={nMessages}
          attachFileCount={nAttachments}
        />
      </View>
    </View>
  );
};
