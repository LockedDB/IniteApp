import { Image, View } from 'react-native';
import { CustomText } from '@/components/CustomText';

const c = require('../../../../assets/png/test_user.png');

interface ChatMessageProps {
  textMessage?: string;
}

export const ChatMessage = ({ textMessage = '' }: ChatMessageProps) => (
  <View style={{ alignSelf: 'stretch', flexDirection: 'row', gap: 16 }}>
    <Image source={c} style={{ borderRadius: 2, width: 24, height: 24 }} />
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4 }}>
        <CustomText fontStyle="bold" style={{ fontSize: 18 }}>
          Marc Wright
        </CustomText>
        <CustomText style={{ color: '#fff', fontSize: 12, opacity: 0.7 }}>
          1:48pm
        </CustomText>
      </View>

      <View style={{ marginTop: 12 }}>
        <CustomText style={{ fontSize: 16 }}>{textMessage}</CustomText>
      </View>
    </View>
  </View>
);
