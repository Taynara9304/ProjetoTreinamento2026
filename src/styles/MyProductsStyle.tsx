import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  title: {
    fontWeight: 700,
    fontSize: 18,
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
    justifyContent: 'space-between',
  },
  columnWrapper: {
    justifyContent: 'center',
    gap: 10,
    marginBottom: 10,
  },
});

export default styles;