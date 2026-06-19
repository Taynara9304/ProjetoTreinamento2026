import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addItemButton: {
    width: 50,
    height: 50,
    backgroundColor: '#abcfff',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  productList: {
    width: '80%',
    marginBottom: 20,
    flex: 1,
    maxHeight: '50%',
  },
  myProductsButton: {
    width: 150,
    height: 50,
    backgroundColor: '#abcfff',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
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