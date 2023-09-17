import { FlatList } from 'react-native';
import styles from './styles';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { useMountEffect } from '@/utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessagesRequest } from '@/modules/TopicDetails/slice';
import { selectUserId } from '@/modules/authentication_flow/redux/profile/selectors';
import {
  selectIsLoadingMessages,
  selectMessages,
} from '@/modules/TopicDetails/selectors';
import LoadingComponent from '@/components/LoadingComponent/LoadingComponent';
import { Messages } from '@/Models/message';

interface Props {
  topicId: string;
}

export const Chat = ({ topicId }: Props) => {
  const dispatch = useDispatch();
  const uid = useSelector(selectUserId);
  const messages = useSelector(selectMessages);
  const loading = useSelector(selectIsLoadingMessages);

  useMountEffect(() => {
    dispatch(fetchMessagesRequest(topicId));
  });

  if (!messages || loading) return <LoadingComponent />;

  const messagedMocked = [
    {
      messageText: 'Hey! How are you?',
      sentAt: new Date('2023-09-17T10:00:00.000Z'),
      sentBy: 'JohnDoe',
    },
    {
      messageText: "I'm good, thanks for asking. How about you?",
      sentAt: new Date('2023-09-17T10:05:00.000Z'),
      sentBy: 'JaneDoe',
    },
    {
      messageText: "I'm doing well. Just working on a project.",
      sentAt: new Date('2023-09-17T10:10:00.000Z'),
      sentBy: 'JohnDoe',
    },
    {
      messageText: 'Great to hear. Good luck with your project!',
      sentAt: new Date('2023-09-17T10:15:00.000Z'),
      sentBy: 'JaneDoe',
    },
  ] as Messages[];

  const renderItem = ({
    item: { sentBy, messageText },
  }: {
    item: Messages;
  }) => (
    <ChatMessage
      from={sentBy === uid ? 'user' : 'other'}
      textMessage={messageText}
    />
  );

  return (
    <FlatList
      data={messagedMocked}
      style={styles.container}
      contentContainerStyle={styles.content}
      renderItem={renderItem}
    />
  );
};
