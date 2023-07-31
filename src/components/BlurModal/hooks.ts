import { useState } from 'react';

interface useBlurModalType {
  isModalVisible: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
}

export const useBlurModal = (): useBlurModalType => {
  const [isModalVisible, setModalVisible] = useState(false);

  const onOpenModal = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  return {
    isModalVisible,
    onOpenModal,
    onCloseModal,
  };
};
