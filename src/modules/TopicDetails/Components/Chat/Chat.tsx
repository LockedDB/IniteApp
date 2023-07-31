import { View } from 'react-native';
import styles from './styles';
import { ChatMessage } from '../ChatMessage/ChatMessage';

export const Chat = () => (
  <View style={styles.container}>
    <ChatMessage from="user" textMessage="Okay, I can’t wait to get started" />
    <ChatMessage
      from="other"
      textMessage="Hi. I have great news. A new project is starting, I’ll tell you more about it later."
    />
  </View>
);
