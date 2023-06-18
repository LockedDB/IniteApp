import { Black } from '@utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',

    borderRadius: 100,
  },
  text: {
    color: Black,
    lineHeight: 16,

    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
