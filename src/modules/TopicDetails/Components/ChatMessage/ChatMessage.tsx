import { View } from 'react-native';
import styles from './styles';
import { CustomText } from '@/components/CustomText';

type UserTypes = 'user' | 'other';

interface ChatMessageProps {
  from?: UserTypes;
  textMessage?: string;
}

export const ChatMessage = ({
  from = 'user',
  textMessage = '',
}: ChatMessageProps) => (
  <View style={styles.container}>
    <View style={[styles.message, styles[from]]}>
      <CustomText>{textMessage}</CustomText>
    </View>
  </View>
);
