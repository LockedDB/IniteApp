import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Black, White300 } from '@/utils/colors';
import { CustomText } from '@/components/CustomText';
import { BlurModal, BlurModalProps } from '@/components/BlurModal';
import { CategoryTag } from '@/components/CategoryTag';

const CreateButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <CustomText style={{ color: Black, fontSize: 14 }} fontStyle="medium">
      Create
    </CustomText>
  </TouchableOpacity>
);

interface ModalProps extends BlurModalProps {
  type: 'project' | 'topic';
  onSubmit: (name: string, description: string) => void;
}

export const AddingContentModal = ({
  type,
  onSubmit,
  ...props
}: ModalProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const isProject = type === 'project';

  const onPressCreate = () => {
    if (name === '') return;

    props.onClose();
    onSubmit(name, description);
  };

  return (
    <BlurModal {...props} style={styles.modal} withCloseButton>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextInput
            placeholder={`Add a ${isProject ? 'Project' : 'Topic'} Name 🤘`}
            placeholderTextColor={White300}
            style={styles.projectNameInput}
            onChangeText={setName}
            value={name}
          />
        </View>

        {isProject && (
          <TextInput
            placeholder="Other teammates will appreciate some context, you can write a description here..."
            placeholderTextColor={White300}
            style={styles.descriptionInput}
            multiline
            textAlignVertical="top"
            numberOfLines={2}
            maxLength={180}
            onChangeText={setDescription}
            value={description}
          />
        )}

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
