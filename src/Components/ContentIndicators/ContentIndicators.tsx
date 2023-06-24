import { CustomText } from '@components/CustomText';
import { ChatBubble, AttachFile } from 'Assets/SVG';
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
