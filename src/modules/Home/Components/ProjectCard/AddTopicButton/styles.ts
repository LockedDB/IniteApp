import { White } from '@/utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    gap: 8,
  },
  buttonText: {
    fontSize: 16,
    color: White,
  },
});
