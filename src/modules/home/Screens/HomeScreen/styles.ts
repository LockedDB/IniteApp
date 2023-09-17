import { Black } from '@/utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  topBarContainer: {
    backgroundColor: Black,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
  },
  contentList: {
    flex: 1,
    gap: 16,
    paddingHorizontal: 16,
  },
});
