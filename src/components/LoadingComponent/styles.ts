import { StyleSheet } from 'react-native';
import { Black, White } from '@/utils/colors';

export default StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Black,
  },
  dot: {
    backgroundColor: White,
    width: 8,
    height: 8,
    borderRadius: 5,
    margin: 2,
  },
});
