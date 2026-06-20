import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginBottom: 20,
    zIndex: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: 'black',
    paddingLeft: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    color: '#000',
  },
  drawer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderTopWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#fff',
    maxHeight: 150,
    overflow: 'hidden',
  },
  optionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
});

export default styles;