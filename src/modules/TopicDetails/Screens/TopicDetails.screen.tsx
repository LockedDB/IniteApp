import { Chat, TopicDetailsFooter, TopicDetailsHeader } from '../Components';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GenericNavigation, ScreenRouteType } from '@/modules/navigation/types';
import { CustomSafeAreaView } from '@/components/CustomSafeAreaView';
import { TopBar } from '@/components/TopBar';
import { Close, Doc, Mic, MoreVertical, Picture } from '@/assets/SVG';
import { Divider } from '@/components/Divider';
import { TOPICS_DETAILS_SCREEN } from '@/modules/navigation/paths';
import { useState } from 'react';
import { BottomSheet } from '@/components/BottomSheet/BottomSheet';
import { CustomText } from '@/components/CustomText';

interface TopicDetailScreenProps {}

export const TopicDetailScreen = ({}: TopicDetailScreenProps) => {
  const {
    params: { id },
  } = useRoute<ScreenRouteType<typeof TOPICS_DETAILS_SCREEN>>();
  const [isAttachmentsOpen, setAttachmentsOpen] = useState(false);
  const [isOptionsOpen, setOptionsOpen] = useState(false);
  const { goBack } = useNavigation<GenericNavigation>();

  function onToggleAttachments() {
    setAttachmentsOpen(false);
  }

  function onToggleOptions() {
    setOptionsOpen(false);
  }

  return (
    <CustomSafeAreaView>
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

      <BottomSheet
        height={140}
        isOpen={isOptionsOpen}
        onToggle={onToggleOptions}>
        <View style={{ gap: 8 }}>
          <TouchableOpacity style={{ paddingVertical: 8 }} onPress={() => {}}>
            <CustomText style={{ fontSize: 16 }}>Rename</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingVertical: 8 }} onPress={() => {}}>
            <CustomText style={{ fontSize: 16 }}>Delete</CustomText>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </CustomSafeAreaView>
  );
};
