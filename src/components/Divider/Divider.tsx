import { White300 } from '@/utils/colors';
import { StyleSheet, View } from 'react-native';

export const Divider = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    borderRadius: 24,
    height: 0.5,
    width: '100%',
    backgroundColor: White300,
  },
});
