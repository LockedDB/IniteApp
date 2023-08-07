import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { logout } from '@/modules/authentication_flow/redux/auth/slice';
import { Gunmetal, White } from '@/utils/colors';
import { CustomText } from '@/components/CustomText';
import { Logout } from '@/assets/SVG';
import { selectUserPhotoUrl } from '@/modules/authentication_flow/redux/profile/selectors';

export const CustomDrawerContent = (props: any) => {
  const dispatch = useDispatch();
  const uri = useSelector(selectUserPhotoUrl);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <DrawerContentScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentScrollView}
      {...props}>
      <View>
        {uri && <Image source={{ uri }} style={styles.photo} />}
        <CustomText>Daniel Benet</CustomText>
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Logout />
        <CustomText style={styles.logoutText} fontStyle="medium">
          Log Out
        </CustomText>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Gunmetal,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  contentScrollView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#D45B35',
    padding: 8,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  logoutText: {
    color: White,
    fontSize: 16,
  },
});
