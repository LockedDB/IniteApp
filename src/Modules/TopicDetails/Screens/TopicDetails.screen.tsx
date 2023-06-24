import { CustomSafeAreaView } from '@components/CustomSafeAreaView';
import { TopBar } from '@components/TopBar';
import { Close, MoreVertical } from 'Assets/SVG';
import { TopicDetailsHeader } from '../Components/TopicDetailsHeader/TopicDetailsHeader';
import { Divider } from '@components/Divider';

interface TopicDetailScreenProps {}

export const TopicDetailScreen = () => {
  return (
    <CustomSafeAreaView>
      <TopBar leftComponent={<Close />} rightComponent={<MoreVertical />} />
      <TopicDetailsHeader />
      <Divider />
    </CustomSafeAreaView>
  );
};
