import { ContentIndicators } from '@/components/ContentIndicators';
import { CustomText } from '@/components/CustomText';
import { useNavigation } from '@react-navigation/native';
import { ArrowForward } from '@/assets/SVG';
import { TOPICS_DETAILS_SCREEN } from '@/modules/navigation/paths';
import { GenericNavigation } from '@/modules/navigation/types';
import { TouchableOpacity, View } from 'react-native';
import styles from '../Screens/styles';
import { Topic } from '@/Models/topic';

export const TopicRow = ({ item }: { item: Topic }) => {
  const { push } = useNavigation<GenericNavigation>();

  const onPress = () => {
    push(TOPICS_DETAILS_SCREEN, { id: item.id ?? '1' });
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, styles.row]}>
      <CustomText style={styles.rowTitle} fontStyle="bold">
        {item.topicName}
      </CustomText>
      <View style={[styles.row, styles.spacing]}>
        <ContentIndicators
          chatBubbleCount={item.nMessages}
          attachFileCount={item.nAttachments}
        />
        <ArrowForward />
      </View>
    </TouchableOpacity>
  );
};
