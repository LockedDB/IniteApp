import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    alignSelf: 'stretch',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
  },
  contentContainer: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  participantsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bubblesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: -12,
  },
});
