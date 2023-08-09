import { Black, Gunmetal, White } from '@/utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    margin: 16,
    marginRight: 8,
    marginTop: 0,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    height: 48,
    width: '75%',
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
    textAlign: 'justify',
  },
  sendButton: {
    width: 56,
    height: 48,
    alignSelf: 'flex-start',
    backgroundColor: White,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText: {
    alignSelf: 'center',
    color: Black,
  },
});
