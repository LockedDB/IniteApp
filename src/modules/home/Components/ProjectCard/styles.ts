import { EerieBlack, White, White700 } from '@/utils/colors';
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
  container: {
    flexDirection: 'row',
    padding: 16,
    paddingBottom: 0,
    backgroundColor: EerieBlack,
    borderRadius: 8,
  },
  topCard: {
    width: '100%',
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
  moreButtons: {
    height: 24,
    marginLeft: 'auto',
  },
  bullet: {
    color: White,
  },
  gapping: {
    gap: 8,
  },
});
