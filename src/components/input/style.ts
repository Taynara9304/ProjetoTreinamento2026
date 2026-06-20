import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    paddingLeft: 10,
  },
});

export default styles;