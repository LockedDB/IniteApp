import { createAsyncActions } from '@utils/utils';
import { CreateProjectRequest } from '../Models/project';

export const dispatchCreateProject = createAsyncActions<
  undefined,
  string,
  CreateProjectRequest
>('@PROJECT/CREATE_PROJECT');
