import { Close } from '@/assets/SVG';
import React, { PropsWithChildren } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  ModalProps,
  Pressable,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';

import styles from './styles';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Gunmetal } from '@/utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export interface BlurModalProps extends ModalProps {
  isVisible: boolean;
  onClose: () => void;
  style?: ViewStyle;
  withCloseButton?: boolean;
}

export const BlurModal = ({
  isVisible,
  children,
  onClose,
  style,
  withCloseButton = true,
}: PropsWithChildren<BlurModalProps>) => {
  const { bottom } = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  return (
    <>
      {isVisible && (
        <AnimatedPressable
          style={styles.blur}
          entering={FadeIn}
          exiting={FadeOut}
          onPress={onClose}
        />
      )}
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <KeyboardAvoidingView
          behavior={'padding'}
          style={{ flex: 1, minHeight: height - bottom }}>
          <View style={[styles.modalContent, style]}>{children}</View>
        </KeyboardAvoidingView>
        {!!withCloseButton && (
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              bottom,
              backgroundColor: Gunmetal,
              borderRadius: 10000,
              padding: 8,
            }}
            onPress={onClose}>
            <Close />
          </TouchableOpacity>
        )}
      </Modal>
    </>
  );
};
