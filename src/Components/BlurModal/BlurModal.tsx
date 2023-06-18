import { Close } from 'Assets/SVG';
import React, { PropsWithChildren } from 'react';
import { Modal, Pressable, View, ViewStyle } from 'react-native';
import styles from './styles';

export interface BlurModalProps {
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
  );
};
