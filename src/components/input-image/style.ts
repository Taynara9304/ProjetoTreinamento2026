import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,

  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  previewContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  removeButton: {
    backgroundColor: '#FF3B30',
    padding: 5,
    paddingVertical: 0,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  scrollContainer: {
    flexDirection: 'row',
  },
});

export default styles;