import { Gunmetal, White } from '@/utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modal: {
    paddingHorizontal: 24,
  },
  container: {
    padding: 16,
    backgroundColor: Gunmetal,
    borderRadius: 8,
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  projectNameInput: {
    width: '80%',
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    color: White,
  },
  descriptionInput: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: White,
    height: 60,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: White,
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
