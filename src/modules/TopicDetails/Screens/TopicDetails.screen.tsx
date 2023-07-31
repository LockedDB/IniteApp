import { Chat, TopicDetailsFooter, TopicDetailsHeader } from '../Components';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigation } from '@/modules/Navigation/types';
import { CustomSafeAreaView } from '@/components/CustomSafeAreaView';
import { TopBar } from '@/components/TopBar';
import { Close, MoreVertical } from '@/assets/SVG';
import { Divider } from '@/components/Divider';

interface TopicDetailScreenProps {}

export const TopicDetailScreen = ({}: TopicDetailScreenProps) => {
  const { goBack } = useNavigation<GenericNavigation>();
  return (
    <CustomSafeAreaView>
      <TopBar
        leftComponent={
          <TouchableOpacity onPress={goBack}>
            <Close />
          </TouchableOpacity>
        }
        rightComponent={<MoreVertical />}
      />
      <TopicDetailsHeader />
      <Divider />

      <Chat />

      <TopicDetailsFooter />
    </CustomSafeAreaView>
  );
};
