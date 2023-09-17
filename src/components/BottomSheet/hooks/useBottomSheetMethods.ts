import { useState } from 'react';

export const useBottomSheetMethods = () => {
  const [isOpen, setOpen] = useState(false);

  function onToggle() {
    setOpen(false);
  }

  return { isOpen, setOpen, onToggle };
};
