import { BlurModal, BlurModalProps } from '@components/BlurModal';
import { CategoryTag } from '@components/CategoryTag';
import { CustomText } from '@components/CustomText';
import { Black, White300 } from '@utils/colors';
import { Close } from 'Assets/SVG';
import React from 'react';
import { Pressable, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface ModalProps extends BlurModalProps {}

export const AddProjectModal = ({ ...props }: ModalProps) => {
  const onPressCreate = () => {
    props.onClose();
  };

  return (
    <BlurModal {...props} style={styles.modal} withCloseButton={false}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextInput
            placeholder="Project Name"
            placeholderTextColor={White300}
            style={styles.projectNameInput}
            maxLength={20}
          />

          <Pressable onPress={props.onClose}>
            <Close />
          </Pressable>
        </View>

        <TextInput
          placeholder="Other initiators will appreciate some context, you can write a description here..."
          placeholderTextColor={White300}
          style={styles.descriptionInput}
          multiline
          textAlignVertical="top"
          numberOfLines={2}
          maxLength={180}
        />

        <View style={styles.categoryContainer}>
          <TouchableOpacity>
            <CategoryTag colorIndex={0}>+</CategoryTag>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={onPressCreate}>
            <CustomText style={{ color: Black }} fontStyle="medium">
              Create
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </BlurModal>
  );
};
