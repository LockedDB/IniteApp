import { CustomText } from '@/components/CustomText';
import { AttachFile, ChatBubble } from '@/assets/SVG';
import { View } from 'react-native';
import styles from './styles';

interface ContentIndicatorsProps {
  chatBubbleCount: number;
  attachFileCount: number;
}

export const ContentIndicators = ({
  chatBubbleCount,
  attachFileCount,
}: ContentIndicatorsProps) => (
  <View>
    <View style={[styles.row, styles.spacing]}>
      <ChatBubble />
      <CustomText>{chatBubbleCount}</CustomText>
    </View>
    <View style={[styles.row, styles.spacing]}>
      <AttachFile />
      <CustomText>{attachFileCount}</CustomText>
    </View>
  </View>
);
