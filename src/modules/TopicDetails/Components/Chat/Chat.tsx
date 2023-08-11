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
      data={messages}
      style={styles.container}
      contentContainerStyle={styles.content}
      renderItem={renderItem}
    />
  );
};
