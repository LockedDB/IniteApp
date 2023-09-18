import { Image, TouchableOpacity, View } from 'react-native';
import { CustomSafeAreaView } from '@/components/CustomSafeAreaView';
import { CustomText } from '@/components/CustomText';
import { Black } from '@/utils/colors';
import { TopBar } from '@/components/TopBar';
import { Bell, Close, Exit, People } from '@/assets/SVG';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigation } from '@/modules/navigation/types';
import { useDispatch } from 'react-redux';
import { logout } from '@/modules/authentication_flow/redux/auth/slice';

const testImage = require('../../assets/png/test_user.png');

const Handle = () => (
  <View
    style={{
      height: 2.2,
      width: 45,
      backgroundColor: 'white',
      alignSelf: 'center',
      marginTop: 8,
    }}
  />
);

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { goBack } = useNavigation<GenericNavigation>();

  function onLogout() {
    dispatch(logout());
  }

  return (
    <CustomSafeAreaView style={{ flex: 1, backgroundColor: Black }}>
      <View style={{ paddingHorizontal: 8 }}>
        <Handle />
        <TopBar
          leftComponent={
            <TouchableOpacity onPress={() => goBack()}>
              <Close />
            </TouchableOpacity>
          }
        />
      </View>

      <View
        style={{
          height: 260,
          backgroundColor: Black,
          borderBottomColor: 'white',
          borderBottomWidth: 6,
          zIndex: 1,
        }}>
        <Image
          source={testImage}
          style={{
            height: 162,
            width: 162,
            borderRadius: 100,
            borderColor: 'white',
            borderWidth: 6,
            position: 'absolute',
            bottom: -32,
            left: 16,
            zIndex: 4,
          }}
        />
      </View>

      <View style={{ marginTop: 32, padding: 16 }}>
        <CustomText
          style={{
            fontSize: 40,
            fontWeight: '800',
            color: 'white',
          }}>
          Marc Wright
        </CustomText>

        <CustomText
          style={{
            opacity: 0.5,
            marginTop: 16,
            fontSize: 16,
            color: 'white',
          }}>
          +34 655 701 689
        </CustomText>
        <CustomText
          style={{
            opacity: 0.5,
            marginTop: 16,
            fontSize: 16,
            color: 'white',
          }}>
          marc.wright@gmail.com
        </CustomText>
      </View>

      <View style={{ gap: 8, padding: 16, backgroundColor: Black, flex: 1 }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            paddingVertical: 8,
          }}>
          <Bell color="white" />
          <CustomText style={{ fontSize: 16 }}>Notifications</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            paddingVertical: 8,
          }}>
          <People color="white" />
          <CustomText style={{ fontSize: 16 }}>
            Invitations to connect
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onLogout}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            paddingVertical: 8,
          }}>
          <Exit color="white" />
          <CustomText style={{ fontSize: 16 }}>Log out</CustomText>
        </TouchableOpacity>
      </View>
    </CustomSafeAreaView>
  );
};
