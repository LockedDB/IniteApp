import { EerieBlack } from '@/utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: EerieBlack,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  participants: {
    flexDirection: 'row',
    gap: -16,
  },
  indicators: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  indicatorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
