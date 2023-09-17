import { StyleSheet } from 'react-native';
import { HEIGHT, OVERDRAG } from '@/components/BottomSheet/consts';
import { Black } from '@/utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sheet: {
    backgroundColor: Black,
    padding: 16,
    paddingTop: 0,
    height: HEIGHT,
    width: '100%',
    position: 'absolute',
    bottom: -OVERDRAG * 1.1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 1,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
});
