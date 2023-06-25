import { ContentIndicators } from '@components/ContentIndicators';
import { CustomText } from '@components/CustomText';
import { useNavigation } from '@react-navigation/native';
import { ArrowForward } from 'Assets/SVG';
import { TOPICS_DETAILS_SCREEN } from 'Modules/Navigation/paths';
import { GenericNavigation } from 'Modules/Navigation/types';
import { TouchableOpacity, View } from 'react-native';
import styles from '../Screens/styles';
import { TopicListItem } from '../types';

export const TopicRow = ({ item }: { item: TopicListItem }) => {
  const { push } = useNavigation<GenericNavigation>();

  const onPress = () => {
    push(TOPICS_DETAILS_SCREEN, { id: '1' });
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, styles.row]}>
      <CustomText style={styles.rowTitle} fontStyle="bold">
        {item.title}
      </CustomText>
      <View style={[styles.row, styles.spacing]}>
        <ContentIndicators chatBubbleCount={1} attachFileCount={3} />
        <ArrowForward />
      </View>
    </TouchableOpacity>
  );
};
