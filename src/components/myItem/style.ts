import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: 200,
    marginHorizontal: 5,
    alignSelf: 'center',
    borderRadius: 10,
  },
  textContainer: {
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    width: '100%'
  },
});

export default styles;