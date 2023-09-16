import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';

const PrimaryButton = ({
  onPress,
  label,
  style,
  labelStyle,
}: {
  onPress?: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: 'white',
          paddingHorizontal: 32,
          height: 52,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[
          { fontSize: 16, fontWeight: '600', color: 'black' },
          labelStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
