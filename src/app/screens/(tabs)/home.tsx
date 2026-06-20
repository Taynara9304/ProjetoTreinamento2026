import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Item from '../../../components/item';
import SearchBar from '../../../components/search-bar';
import { useState } from 'react';
import CategoryCarousel from '../../../components/category-carousel';
import styles from '../../../styles/HomeStyle';

interface Product {
    id: string,
    name: string,
    description: string,
    price: number
}

function Home() {
    const [name, setName] = useState<string>('Ana');
    const [itemsFound, setItemsFound] = useState<Product[]>();

    const screenWidth = Dimensions.get('window').width;
    const numColumns = screenWidth < 360 ? 1 : 2;

    const products = [
        {id: '1', name: 'Detergente', description: 'Ypê 200ml', price: 1.5},
        {id: '2', name: 'Arroz', description: 'Integral 5kg', price: 15},
        {id: '3', name: 'Iceberg de pelúcia', description: 'Azul', price: 150},
        {id: '4', name: 'Carro', description: 'Ford 2010', price: 1500}
    ]

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', width: '80%', gap: 10 }}>
                <Text style={styles.title}>Oi, {name}</Text>
                <View style={{ justifyContent: 'center'}}>
                    <MaterialCommunityIcons 
                        name="hand-wave-outline" 
                        size={20} 
                        color="#FF6B35"
                    />
                </View>
            </View>
            <View style={{ width: '80%' }}>
                <Text>Vamos às compras!</Text>
            </View>

            <View style={{ width: '80%' }}>
                <SearchBar onSearchDone={setItemsFound} />
            </View>

            <View style={styles.categoryTextContainer}>
                <Text style={styles.title}>Categorias</Text>
            </View>

            <CategoryCarousel />


            {itemsFound ? <View style={styles.productList}>
                <FlatList
                    key={numColumns}
                    numColumns={numColumns} 
                    keyExtractor={item => item.id}
                    data={itemsFound}
                    ListEmptyComponent={<Text>Nenhum produto listado.</Text>}
                    renderItem={({ item }) => (
                        <Item
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            image={'bom dia'}
                            price={item.price}
                        />
                    )}
                    {...(numColumns > 1 && { columnWrapperStyle: styles.columnWrapper })}
                />
            </View>
            : 
            <View style={styles.productList}>
                <FlatList
                    key={numColumns}
                    numColumns={numColumns}
                    keyExtractor={item => item.id}
                    data={products}
                    renderItem={({ item }) => (
                        <Item
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            image={'bom dia'}
                            price={item.price}
                        />
                    )}
                    {...(numColumns > 1 && { columnWrapperStyle: styles.columnWrapper })}
                />
            </View>

            }
        </View>
    )
}

export default Home;