import { CustomText } from '@/components/CustomText';
import { UserBubble } from '@/components/UserBubble';
import { AttachFile, ChatBubble } from '@/assets/SVG';
import { View } from 'react-native';
import styles from './styles';

const ProjectCardFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.participants}>
        <UserBubble source={{ uri: 'https://picsum.photos/200/300.jpg' }} />
        <UserBubble source={{ uri: 'https://picsum.photos/200/300.jpg' }} />
      </View>

      <View style={styles.indicators}>
        <View style={styles.indicatorItem}>
          <ChatBubble />
          <CustomText fontStyle="bold">1</CustomText>
        </View>
        <View style={styles.indicatorItem}>
          <AttachFile />
          <CustomText fontStyle="bold">3</CustomText>
        </View>
      </View>
    </View>
  );
};

export default ProjectCardFooter;
