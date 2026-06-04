import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '../../components/button';
import styles from '../../styles/HomeStyle';
import Item from '../../components/item';
import SearchBar from '../../components/search-bar';
import { useState } from 'react';

interface Product {
    id: string,
    name: string,
    description: string,
    price: number
}

function Home() {
    const router = useRouter();

    const [itemsFound, setItemsFound] = useState<Product[]>([]);

    const products = [
        {id: '1', name: 'Detergente', description: 'Ypê 200ml', price: 1.5},
        {id: '2', name: 'Arroz', description: 'Integral 5kg', price: 15},
        {id: '3', name: 'Iceberg de pelúcia', description: 'Azul', price: 150},
        {id: '4', name: 'Carro', description: 'Ford 2010', price: 1500}
    ]

    return (
        <View style={styles.container}>
            <Text>Home</Text>

            <SearchBar onSearchDone={setItemsFound} />

            <Text>oi</Text>
            <View style={styles.productList}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={itemsFound}
                    horizontal={true}
                    ListEmptyComponent={<Text>Nenhum produto listado.</Text>}
                    renderItem={({ item }) => (
                        <Item
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    )}
                />
            </View>

            <View style={styles.productList}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={products}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <Item
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    )}
                />
            </View>

            <TouchableOpacity
                style={styles.addItemButton}
                onPress={() => {router.push('/screens/registerItem')}}
            >
                <Text>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.myProductsButton}
                onPress={() => {router.push('/screens/myProducts')}}
            >
                <Text>Ver meus produtos</Text>
            </TouchableOpacity>

            <Button text='logout' onPress={() => router.replace('/screens/login')} />
        </View>
    )
}

export default Home