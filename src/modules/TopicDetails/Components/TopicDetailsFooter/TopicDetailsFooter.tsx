import { TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { AttachFile } from '@/assets/SVG';
import { White300 } from '@/utils/colors';
import { CustomText } from '@/components/CustomText';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveMessageRequest } from '@/modules/ProjectDetails/slice';

interface TopicDetailsFooterProps {
  topicId: string;
}

export const TopicDetailsFooter = ({ topicId }: TopicDetailsFooterProps) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const onPress = () => {
    // send message
    dispatch(saveMessageRequest({ messageText: message, topicId }));
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachContainer}>
          <AttachFile />
        </TouchableOpacity>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Write a message..."
          placeholderTextColor={White300}
          style={styles.input}
          multiline
        />
      </View>
      <TouchableOpacity onPress={onPress} style={styles.sendButton}>
        <CustomText style={styles.sendText}>Send</CustomText>
      </TouchableOpacity>
    </View>
  );
};
