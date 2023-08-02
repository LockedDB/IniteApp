import { createAsyncActions } from '@/utils/utils';
import { CreateTopicRequestParams, Topic } from '@/Models/topic';

export const dispatchCreateTopic = createAsyncActions<
  undefined,
  string,
  CreateTopicRequestParams
>('@PROJECT/CREATE_TOPIC');

export const dispatchFetchTopics = createAsyncActions<
  Topic[],
  string,
  string[]
>('@PROJECT/FETCH_TOPICS');
