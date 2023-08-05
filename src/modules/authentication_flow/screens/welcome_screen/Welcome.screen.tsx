import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigation } from '@/modules/navigation/types';
import { LOGIN_SCREEN, REGISTER_SCREEN } from '@/modules/navigation/paths';
import { CustomText } from '@/components/CustomText';
import styles from './styles';

export const WelcomeScreen = () => {
  const { navigate } = useNavigation<GenericNavigation>();
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Welcome</CustomText>
      <CustomText style={styles.subtitle}>
        Choose an option to continue
      </CustomText>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate(LOGIN_SCREEN)}>
        <CustomText style={styles.buttonText}>Log In</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate(REGISTER_SCREEN)}>
        <CustomText style={styles.buttonText}>Register</CustomText>
      </TouchableOpacity>
    </View>
  );
};
export default WelcomeScreen;
