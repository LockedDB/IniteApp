import { useMountEffect } from '@/utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchFetchProjects } from '@/modules/Project/Redux/actions';
import { Project } from '@/Models/project';
import {
  isProjectsErrorSelector,
  isProjectsLoadingSelector,
  projectsSelector,
} from '@/modules/Project/Redux/selectors';
import { fetchUserProfileRequest } from '@/modules/authentication_flow/redux/profile/slice';

interface useFetchProjectsType {
  projects: Project[];
  isLoading: boolean;
  isError: boolean;
  fetchProjects: () => void;
}

export const useFetchProjects = (): useFetchProjectsType => {
  const dispatch = useDispatch();
  const projects = useSelector(projectsSelector);
  const isLoading = useSelector(isProjectsLoadingSelector);
  const isError = useSelector(isProjectsErrorSelector);

  const fetchProjects = () => {
    dispatch(dispatchFetchProjects.Request());
  };

  useMountEffect(() => {
    fetchProjects();
  });

  return {
    projects: projects || [],
    isLoading: isLoading || false,
    isError: isError || false,
    fetchProjects,
  };
};

export const useFetchProfile = () => {
  const dispatch = useDispatch();
  useMountEffect(() => {
    dispatch(fetchUserProfileRequest());
  });
};
