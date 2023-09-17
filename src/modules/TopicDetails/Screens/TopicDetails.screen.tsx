import { Chat, TopicDetailsFooter, TopicDetailsHeader } from '../Components';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GenericNavigation, ScreenRouteType } from '@/modules/navigation/types';
import { CustomSafeAreaView } from '@/components/CustomSafeAreaView';
import { TopBar } from '@/components/TopBar';
import { Close, MoreVertical } from '@/assets/SVG';
import { Divider } from '@/components/Divider';
import { TOPICS_DETAILS_SCREEN } from '@/modules/navigation/paths';

interface TopicDetailScreenProps {}

export const TopicDetailScreen = ({}: TopicDetailScreenProps) => {
  const {
    params: { id },
  } = useRoute<ScreenRouteType<typeof TOPICS_DETAILS_SCREEN>>();
  const { goBack } = useNavigation<GenericNavigation>();

  return (
    <CustomSafeAreaView>
      <View style={{ paddingHorizontal: 16 }}>
        <TopBar
          leftComponent={
            <TouchableOpacity onPress={goBack}>
              <Close />
            </TouchableOpacity>
          }
          rightComponent={<MoreVertical />}
        />
      </View>
      <TopicDetailsHeader />
      <Divider />

      <Chat topicId={id} />

      <TopicDetailsFooter topicId={id} />
    </CustomSafeAreaView>
  );
};
