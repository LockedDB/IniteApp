import { StyleSheet } from 'react-native';
import { Black, White } from '@/utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 30,
  },
  button: {
    marginHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#444',
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: White,
    fontSize: 18,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
});
