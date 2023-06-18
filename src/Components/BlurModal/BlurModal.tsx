import { BlurView } from '@react-native-community/blur';
import { Close } from 'Assets/SVG';
import React, { Fragment, PropsWithChildren } from 'react';
import {
  Modal,
  ModalProps,
  Pressable,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import styles from './styles';

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
    <Fragment>
      {!!isVisible && (
        <TouchableWithoutFeedback onPress={onClose}>
          <BlurView blurAmount={5} style={styles.blur} />
        </TouchableWithoutFeedback>
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
    </Fragment>
  );
};
