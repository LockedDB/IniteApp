import { CustomSafeAreaView } from '@components/CustomSafeAreaView';
import { TopBar } from '@components/TopBar';
import { Close, MoreVertical } from 'Assets/SVG';
import { TopicDetailsHeader } from '../Components/TopicDetailsHeader/TopicDetailsHeader';
import { Divider } from '@components/Divider';
import { Chat, TopicDetailsFooter } from '../Components';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigation } from 'Modules/Navigation/types';

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
