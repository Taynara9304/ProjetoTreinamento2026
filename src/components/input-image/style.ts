import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '60%',
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    gap: 10,
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
  button: {
    backgroundColor: '#4630EB',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
    backgroundColor: '#FF3B30', // Cor vermelha para indicar exclusão/remoção
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
});

export default styles;