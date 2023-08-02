import { createAsyncActions } from '@/utils/utils';
import { CreateTopicRequestParams } from '@/Models/topic';

export const dispatchCreateTopic = createAsyncActions<
  undefined,
  string,
  CreateTopicRequestParams
>('@PROJECT/CREATE_TOPIC');
