import { Close } from 'Assets/SVG';
import React, { PropsWithChildren } from 'react';
import { Modal, Pressable, View } from 'react-native';
import styles from './styles';

interface BlurModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const BlurModal = ({
  isVisible,
  children,
  onClose,
}: PropsWithChildren<BlurModalProps>) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <Pressable onPress={onClose}>
          <Close />
        </Pressable>
        {children}
      </View>
    </Modal>
  );
};
