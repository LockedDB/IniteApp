import { Gunmetal, White } from '@/utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 16,
    marginTop: 0,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    alignSelf: 'stretch',

    borderRadius: 8,
    backgroundColor: Gunmetal,
  },
  attachContainer: {
    paddingTop: 4,
  },
  input: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: White,
    width: '90%',
    textAlign: 'justify',
  },
});
