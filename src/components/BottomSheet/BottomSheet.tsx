import { PropsWithChildren, useEffect } from 'react';
import { Pressable } from 'react-native';
import styles from './styles';
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  SlideInDown,
  SlideOutDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { HEIGHT, OVERDRAG } from '@/components/BottomSheet/consts';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface BottomSheetProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const BottomSheet = ({
  isOpen,
  onToggle,
  children,
}: PropsWithChildren<BottomSheetProps>) => {
  const offset = useSharedValue(0);

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  const pan = Gesture.Pan()
    .onChange(event => {
      const offsetDelta = event.changeY + offset.value;
      const clamp = Math.max(-OVERDRAG, offsetDelta);
      offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
    })
    .onFinalize(() => {
      if (offset.value < HEIGHT / 3) {
        offset.value = withSpring(0);
      } else {
        offset.value = withTiming(HEIGHT, {}, () => {
          runOnJS(onToggle)();
        });
      }
    });

  useEffect(() => {
    offset.value = 0;
  }, [onToggle]);

  if (!isOpen) return null;

  return (
    <>
      <AnimatedPressable
        style={styles.backdrop}
        entering={FadeIn}
        exiting={FadeOut}
        onPress={onToggle}
      />
      <GestureDetector gesture={pan}>
        <Animated.View
          style={[styles.sheet, translateY]}
          entering={SlideInDown.springify().damping(15)}
          exiting={SlideOutDown}>
          {children}
        </Animated.View>
      </GestureDetector>
    </>
  );
};
