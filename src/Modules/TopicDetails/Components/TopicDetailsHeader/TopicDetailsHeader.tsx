import { View } from 'react-native';
import styles from './styles';
import { CustomText } from '@components/CustomText';
import { UserBubble } from '@components/UserBubble';
import { ContentIndicators } from '@components/ContentIndicators';

interface TopicDetailsHeaderProps {}

export const TopicDetailsHeader = ({}: TopicDetailsHeaderProps) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title} fontStyle="black">
        Let’s talk about the kitchen
      </CustomText>

      <View style={styles.contentContainer}>
        <View style={styles.participantsContainer}>
          <View style={styles.bubblesContainer}>
            <UserBubble source={{ uri: 'https://picsum.photos/200/300.jpg' }} />
            <UserBubble source={{ uri: 'https://picsum.photos/200/300.jpg' }} />
            <UserBubble source={{ uri: 'https://picsum.photos/200/300.jpg' }} />
          </View>
          <CustomText>3 active participants</CustomText>
        </View>
        <ContentIndicators chatBubbleCount={1} attachFileCount={3} />
      </View>
    </View>
  );
};
