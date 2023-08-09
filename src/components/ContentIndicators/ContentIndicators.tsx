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
    {chatBubbleCount > 0 && (
      <View style={[styles.row, styles.spacing]}>
        <ChatBubble />
        <CustomText>{chatBubbleCount}</CustomText>
      </View>
    )}
    {attachFileCount > 0 && (
      <View style={[styles.row, styles.spacing]}>
        <AttachFile />
        <CustomText>{attachFileCount}</CustomText>
      </View>
    )}
  </View>
);
