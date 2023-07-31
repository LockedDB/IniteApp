import { CustomText } from '@/components/CustomText';
import { White700 } from '@/utils/colors';
import { Add } from '@/assets/SVG';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const AddTopicButton = () => {
  const [isInput, setIsInput] = useState(false);

  const onPress = () => {
    setIsInput(true);
  };

  const onInputBlur = () => {
    setIsInput(false);
  };

  // TODO: Add topic functionality
  const onSubmit = () => {};

  return (
    <View style={styles.container}>
      {!isInput ? (
        <TouchableOpacity onPress={onPress} style={styles.touchable}>
          <Add />
          <CustomText style={styles.buttonText}>Add Topic</CustomText>
        </TouchableOpacity>
      ) : (
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
      )}
    </View>
  );
};

export default AddTopicButton;
