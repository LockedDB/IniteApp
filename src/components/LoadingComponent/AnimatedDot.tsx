import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import styles from './styles';
import { useMountEffect } from '@/utils/utils';

type AnimatedDotProps = {
  delay: number;
};

const AnimatedDot = ({ delay }: AnimatedDotProps) => {
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  useMountEffect(() => {
    translateY.value = withDelay(
      delay,
      withRepeat(withTiming(-5, { duration: 600 }), -1, true),
    );
  });

  return <Animated.View style={[styles.dot, animatedStyle]} />;
};

export default AnimatedDot;
