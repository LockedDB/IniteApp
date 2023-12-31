import { Chat, TopicDetailsFooter, TopicDetailsHeader } from '../Components';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GenericNavigation, ScreenRouteType } from '@/modules/navigation/types';
import { TopBar } from '@/components/TopBar';
import { Close, Doc, Mic, MoreVertical, Picture } from '@/assets/SVG';
import { Divider } from '@/components/Divider';
import { TOPICS_DETAILS_SCREEN } from '@/modules/navigation/paths';
import { Fragment, useState } from 'react';
import { BottomSheet } from '@/components/BottomSheet/BottomSheet';
import { CustomText } from '@/components/CustomText';
import { useBottomSheetMethods } from '@/components/BottomSheet/hooks/useBottomSheetMethods';
import { OptionsBottomSheet } from '@/components/BottomSheet/components/OptionsBottomSheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface TopicDetailScreenProps {}

export const TopicDetailScreen = ({}: TopicDetailScreenProps) => {
  const dimensions = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();
  const {
    params: { id },
  } = useRoute<ScreenRouteType<typeof TOPICS_DETAILS_SCREEN>>();
  const [isAttachmentsOpen, setAttachmentsOpen] = useState(false);
  const {
    isOpen: isOptionsOpen,
    setOpen: setOptionsOpen,
    onToggle: onToggleOptions,
  } = useBottomSheetMethods();

  const { goBack } = useNavigation<GenericNavigation>();

  function onToggleAttachments() {
    setAttachmentsOpen(false);
  }

  return (
    <Fragment>
      <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
        <SafeAreaView
          style={{ flex: 1, minHeight: dimensions.height - bottom }}>
          <View style={{ paddingHorizontal: 16 }}>
            <TopBar
              leftComponent={
                <TouchableOpacity onPress={goBack}>
                  <Close />
                </TouchableOpacity>
              }
              rightComponent={
                <TouchableOpacity onPress={() => setOptionsOpen(true)}>
                  <MoreVertical />
                </TouchableOpacity>
              }
            />
          </View>
          <TopicDetailsHeader />
          <Divider />

          <Chat topicId={id} />

          <TopicDetailsFooter setOpen={setAttachmentsOpen} topicId={id} />
        </SafeAreaView>
      </KeyboardAvoidingView>

      <BottomSheet
        height={200}
        isOpen={isAttachmentsOpen}
        onToggle={onToggleAttachments}>
        <View style={{ gap: 8 }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
              paddingVertical: 8,
            }}>
            <Picture color="white" width={20} />
            <CustomText style={{ fontSize: 16 }}>Photos & Videos</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
              paddingVertical: 8,
            }}>
            <Mic color="white" width={20} />
            <CustomText style={{ fontSize: 16 }}>Record Audio</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
              paddingVertical: 8,
            }}>
            <Doc color="white" width={20} />
            <CustomText style={{ fontSize: 16 }}>Upload File</CustomText>
          </TouchableOpacity>
        </View>
      </BottomSheet>
      <OptionsBottomSheet
        isOpen={isOptionsOpen}
        onToggle={onToggleOptions}
        onRename={() => {}}
        onDelete={() => {}}
      />
    </Fragment>
  );
};
