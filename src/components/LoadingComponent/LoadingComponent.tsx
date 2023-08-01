import AnimatedDot from './AnimatedDot';
import { OpacityLoader } from './OpacityLoader';

export interface LoadingComponentProps {
  isLoading: boolean;
  opacity?: number;
}

const LoadingComponent = ({ isLoading, opacity }: LoadingComponentProps) => {
  return (
    <OpacityLoader
      isLoading={isLoading}
      animationTime={200}
      initialOpacity={opacity}>
      <AnimatedDot delay={0} />
      <AnimatedDot delay={300} />
      <AnimatedDot delay={600} />
    </OpacityLoader>
  );
};

export default LoadingComponent;
