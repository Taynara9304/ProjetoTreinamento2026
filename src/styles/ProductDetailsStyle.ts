import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingLeft: 20,
    gap: 20,
  },
  title: {
    fontWeight: 500,
    fontSize: 16,
    color: '#555555'
  },
  price: {
    fontWeight: 700,
    fontSize: 16,
  },
  descriptionContainer: {
    width: '100%',
    gap: 10,
  }
});

export default styles;