import { TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveMessageRequest } from '@/modules/TopicDetails/slice';
import { AddAttachment, PaperPlane } from '@/assets/SVG';

interface TopicDetailsFooterProps {
  topicId: string;
}

export const TopicDetailsFooter = ({ topicId }: TopicDetailsFooterProps) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  function onSend() {
    // send message
    dispatch(saveMessageRequest({ messageText: message, topicId }));
    setMessage('');
  }

  function onAddAttachment() {}

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 12,
        borderTopColor: 'white',
        borderTopWidth: 0.2,
        gap: 8,
      }}>
      <TouchableOpacity onPress={onAddAttachment}>
        <AddAttachment />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
        }}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          multiline
          placeholder="Write a message..."
          placeholderTextColor="white"
          style={{
            flex: 1,
            fontSize: 16,
            color: 'white',
            flexWrap: 'wrap',
            flexGrow: 1,
          }}
        />
        <TouchableOpacity
          onPress={onSend}
          hitSlop={20}
          style={{ paddingTop: 5, flexShrink: 0 }}>
          <PaperPlane color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
