import { Gunmetal, White } from '@utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modal: {
    paddingHorizontal: 24,
  },
  container: {
    padding: 16,
    backgroundColor: Gunmetal,
    borderRadius: 8,
    gap: 8,
    width: '100%',
    height: 148,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  projectNameInput: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    color: White,
    maxWidth: '80%',
  },
  descriptionInput: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: White,
    height: 50,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: White,
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
