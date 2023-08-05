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
import { useDispatch } from 'react-redux';
import { dispatchCreateTopic } from '@/modules/Topic/Redux/actions';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

interface Props {
  projectId: string;
}

const AddTopicButton = ({ projectId }: Props) => {
  const dispatch = useDispatch();
  const [isInput, setIsInput] = useState(false);
  const [topicName, setTopicName] = useState('');

  const onPress = () => {
    setIsInput(true);
  };

  const onInputBlur = () => {
    setIsInput(false);
  };

  const onSubmit = () => {
    onInputBlur();

    if (!topicName) return;
    dispatch(dispatchCreateTopic.Request({ projectId, topicName }));
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
              onChangeText={value => setTopicName(value)}
              onSubmitEditing={onSubmit}
              style={styles.buttonText}
              placeholderTextColor={White700}
              autoFocus
            />
          </View>
          <AnimatedTouchableOpacity
            entering={SlideInRight.springify().damping(15)}
            exiting={SlideOutRight}
            hitSlop={40}
            onPress={onSubmit}>
            <CustomText style={styles.buttonText}>Save</CustomText>
          </AnimatedTouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

export default AddTopicButton;
