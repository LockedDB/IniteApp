import { Close } from '@/assets/SVG';
import React, { PropsWithChildren } from 'react';
import { Modal, ModalProps, Pressable, View, ViewStyle } from 'react-native';

import styles from './styles';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

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
        <View style={[styles.modalContent, style]}>
          {!!withCloseButton && (
            <Pressable onPress={onClose}>
              <Close />
            </Pressable>
          )}
          {children}
        </View>
      </Modal>
    </>
  );
};
