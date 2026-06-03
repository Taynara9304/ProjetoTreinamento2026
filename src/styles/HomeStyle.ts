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
    width: '100%',
    flexGrow: 0,
    backgroundColor: 'pink',
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
  }
});

export default styles;