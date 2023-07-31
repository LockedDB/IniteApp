import { useMountEffect } from '@/utils/utils';
import { useDispatch } from 'react-redux';
import { dispatchFetchProjects } from '@/modules/Project/Redux/actions';
import { Project } from '@/modules/Project/Models/project';

interface useFetchProjectsType {
  projects: Project[];
  isLoading: boolean;
  isError: boolean;
  fetchProjects: () => void;
}

export const useFetchProjects = (): useFetchProjectsType => {
  const dispatch = useDispatch();

  const fetchProjects = () => {
    dispatch(dispatchFetchProjects.Request());
  };

  useMountEffect(() => {
    fetchProjects();
  });

  return { projects: [], isLoading: false, isError: false, fetchProjects };
};
