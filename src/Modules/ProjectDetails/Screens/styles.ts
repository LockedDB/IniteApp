import { Black, EerieBlack } from '@utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  page: {
    padding: 8,
  },
  header: {
    gap: 8,
    marginTop: 8,
    marginBottom: 16,
  },
  title: {
    width: '80%',
    fontSize: 24,
    lineHeight: 28.44,
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    opacity: 0.7,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  listHeader: {
    padding: 16,
    backgroundColor: Black,
  },
  listTitle: {
    fontSize: 20,
    lineHeight: 23.44,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spacing: {
    gap: 8,
  },
  padding: {
    padding: 8,
    paddingVertical: 16,
  },
  item: {
    backgroundColor: EerieBlack,
    borderRadius: 8,
    padding: 16,
  },
  rowTitle: {
    fontSize: 16,
    lineHeight: 18,
  },
});
