import { PropsWithChildren, useEffect } from 'react';
import { Pressable, View } from 'react-native';
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
import { Portal } from '@gorhom/portal';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export interface BottomSheetProps {
  isOpen: boolean;
  onToggle: () => void;
  height?: number;
}

export const BottomSheet = ({
  isOpen,
  onToggle,
  height,
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
    <Portal>
      <AnimatedPressable
        style={styles.backdrop}
        entering={FadeIn}
        exiting={FadeOut}
        onPress={onToggle}
      />
      <GestureDetector gesture={pan}>
        <Animated.View
          style={[styles.sheet, translateY, { height }]}
          entering={SlideInDown.springify().damping(15)}
          exiting={SlideOutDown}>
          <View
            style={{
              width: 50,
              height: 3,
              borderRadius: 24,
              alignSelf: 'center',
              backgroundColor: 'white',
              marginTop: 8,
              marginBottom: 8,
            }}
          />
          {children}
        </Animated.View>
      </GestureDetector>
    </Portal>
  );
};
