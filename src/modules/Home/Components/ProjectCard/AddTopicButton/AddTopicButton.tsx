import { CustomText } from '@/components/CustomText';
import { White700 } from '@/utils/colors';
import { Add } from '@/assets/SVG';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutRight,
} from 'react-native-reanimated';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const AddTopicButton = () => {
  const [isInput, setIsInput] = useState(false);

  const onPress = () => {
    setIsInput(true);
  };

  const onInputBlur = () => {
    setIsInput(false);
  };

  const onSubmit = () => {
    // TODO: Add topic functionality
    onInputBlur();
  };

  return (
    <View style={styles.container}>
      {!isInput ? (
        <AnimatedTouchableOpacity
          entering={FadeIn}
          exiting={FadeOut}
          onPress={onPress}
          style={styles.touchable}>
          <Add />
          <CustomText style={styles.buttonText}>Add Topic</CustomText>
        </AnimatedTouchableOpacity>
      ) : (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={styles.touchable}>
          <View style={styles.touchable}>
            <Add />
            <TextInput
              placeholder="Add Topic"
              onBlur={onInputBlur}
              returnKeyType="done"
              onSubmitEditing={onSubmit}
              style={styles.buttonText}
              placeholderTextColor={White700}
              autoFocus
            />
          </View>
          <AnimatedTouchableOpacity
            entering={SlideInRight.springify().damping(15)}
            exiting={SlideOutRight}
            onPress={onSubmit}>
            <CustomText style={styles.buttonText}>Save</CustomText>
          </AnimatedTouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

export default AddTopicButton;
