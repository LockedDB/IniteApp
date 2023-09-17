import {
  BottomSheet,
  BottomSheetProps,
} from '@/components/BottomSheet/BottomSheet';
import { TouchableOpacity, View } from 'react-native';
import { CustomText } from '@/components/CustomText';

type Props = {
  onRename: () => void;
  onDelete: () => void;
};

export const OptionsBottomSheet = ({
  onRename,
  onDelete,
  ...props
}: BottomSheetProps & Props) => {
  return (
    <BottomSheet height={140} {...props}>
      <View style={{ gap: 8 }}>
        <TouchableOpacity style={{ paddingVertical: 8 }} onPress={onRename}>
          <CustomText style={{ fontSize: 16 }}>Rename</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 8 }} onPress={onDelete}>
          <CustomText style={{ fontSize: 16 }}>Delete</CustomText>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};
