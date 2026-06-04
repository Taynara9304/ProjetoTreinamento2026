import { View, Text, TextInput, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import { useState } from 'react';
    
interface Product {
    id: string,
    name: string,
    description: string,
    price: number
}

interface SearchBarProps {
    onSearchDone: (results: Product[]) => void;
}

function SearchBar({ onSearchDone }: SearchBarProps) {
    const [word, setWord] = useState<string>('');

    const products: Product[] = [
        {id: '1', name: 'Detergente', description: 'Ypê 200ml', price: 1.5},
        {id: '2', name: 'Arroz', description: 'Integral 5kg', price: 15},
        {id: '3', name: 'Iceberg de pelúcia', description: 'Azul', price: 150},
        {id: '4', name: 'Carro', description: 'Ford 2010', price: 1500}
    ]

    function findItem() {
        const results = products.filter(p => 
            p.name.toLowerCase().includes(word.toLowerCase())
        );

        onSearchDone(results);
    }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Pesquise algum item'
        style={styles.input}
        onChangeText={(newWord) => {
            setWord(newWord)
        }}
        value={word}
      />

      <Pressable
        onPress={findItem}
        style={styles.button}
      >
        <Ionicons name='search' size={24} />
      </Pressable>
    </View>
  )
}

export default SearchBar;