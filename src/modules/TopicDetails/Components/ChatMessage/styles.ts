import { EerieBlack, Gunmetal } from '@/utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'stretch',
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
