import { EerieBlack, White, White700 } from '@utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    gap: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  tags: {
    flexDirection: 'row',
    gap: 8,
  },
  topCard: {
    padding: 16,
    paddingBottom: 8,
    gap: 8,
    backgroundColor: EerieBlack,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 20,
    lineHeight: 23,
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    color: White700,
  },
  bullet: {
    color: White,
  },
});
