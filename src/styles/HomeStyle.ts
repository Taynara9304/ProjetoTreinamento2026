import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  productList: {
    width: '80%',
    marginBottom: 20,
    flex: 1,
    maxHeight: '50%',
  },
  categoryTextContainer: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 10,
  },
  columnWrapper: {
    justifyContent: 'center',
    gap: 10,
    marginBottom: 10,
  },
});

export default styles;