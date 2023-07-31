import { TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { AttachFile } from '@/assets/SVG';
import { White300 } from '@/utils/colors';

export const TopicDetailsFooter = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.attachContainer}>
      <AttachFile />
    </TouchableOpacity>
    <TextInput
      placeholder="Write a message..."
      placeholderTextColor={White300}
      style={styles.input}
      multiline
    />
  </View>
);
