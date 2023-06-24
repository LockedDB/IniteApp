import { CustomSafeAreaView } from '@components/CustomSafeAreaView';
import { TopBar } from '@components/TopBar';
import { Close, MoreVertical } from 'Assets/SVG';
import { TopicDetailsHeader } from '../Components/TopicDetailsHeader/TopicDetailsHeader';
import { Divider } from '@components/Divider';
import { Chat, TopicDetailsFooter } from '../Components';

interface TopicDetailScreenProps {}

export const TopicDetailScreen = ({}: TopicDetailScreenProps) => {
  return (
    <CustomSafeAreaView>
      <TopBar leftComponent={<Close />} rightComponent={<MoreVertical />} />
      <TopicDetailsHeader />
      <Divider />

      <Chat />

      <TopicDetailsFooter />
    </CustomSafeAreaView>
  );
};
