import {
  BottomSheet,
  BottomSheetProps,
} from '@/components/BottomSheet/BottomSheet';
import { TouchableOpacity, View } from 'react-native';
import { CustomText } from '@/components/CustomText';

export const OptionsBottomSheet = ({ ...props }: BottomSheetProps) => {
  return (
    <BottomSheet height={140} {...props}>
      <View style={{ gap: 8 }}>
        <TouchableOpacity style={{ paddingVertical: 8 }} onPress={() => {}}>
          <CustomText style={{ fontSize: 16 }}>Rename</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 8 }} onPress={() => {}}>
          <CustomText style={{ fontSize: 16 }}>Delete</CustomText>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};
