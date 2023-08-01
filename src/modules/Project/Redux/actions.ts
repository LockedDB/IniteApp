import { createAsyncActions } from '@/utils/utils';
import { CreateProjectRequest, Project } from '../Models/project';

export const dispatchCreateProject = createAsyncActions<
  undefined,
  string,
  CreateProjectRequest
>('@PROJECT/CREATE_PROJECT');

export const dispatchFetchProjects = createAsyncActions<
  Project[],
  string,
  void
>('@PROJECT/FETCH_PROJECTS');

export const dispatchDeleteProject = createAsyncActions<
  void,
  string,
  { projectId: string }
>('@PROJECT/DELETE_PROJECT');
