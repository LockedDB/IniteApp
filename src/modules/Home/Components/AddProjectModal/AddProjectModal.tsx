import React, { useState } from 'react';
import { Pressable, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { dispatchCreateProject } from '../../../Project/Redux/actions';
import { Black, White300 } from '@/utils/colors';
import { CustomText } from '@/components/CustomText';
import { BlurModal, BlurModalProps } from '@/components/BlurModal';
import { Close } from '@/assets/SVG';
import { CategoryTag } from '@/components/CategoryTag';

const CreateButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <CustomText style={{ color: Black, fontSize: 14 }} fontStyle="medium">
      Create
    </CustomText>
  </TouchableOpacity>
);

interface ModalProps extends BlurModalProps {}

export const AddProjectModal = ({ ...props }: ModalProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const onPressCreate = () => {
    props.onClose();
    dispatch(dispatchCreateProject.Request({ name, description }));
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
            onChangeText={setName}
            value={name}
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
          onChangeText={setDescription}
          value={description}
        />

        <View style={styles.categoryContainer}>
          <TouchableOpacity>
            <CategoryTag colorIndex={0}>+</CategoryTag>
          </TouchableOpacity>

          <CreateButton onPress={onPressCreate} />
        </View>
      </View>
    </BlurModal>
  );
};
