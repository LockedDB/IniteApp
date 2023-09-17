import { EerieBlack, Gunmetal } from '@/utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    gap: 16,
  },
  message: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  user: {
    alignSelf: 'flex-end',
    backgroundColor: Gunmetal,
  },
  other: {
    alignSelf: 'flex-start',
    backgroundColor: EerieBlack,
  },
});
