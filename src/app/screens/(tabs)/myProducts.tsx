import { View, Text, FlatList, Dimensions } from 'react-native'
import MyItem from '../../../components/myItem'
import SearchBar from '../../../components/search-bar';
import CategoryCarousel from '../../../components/category-carousel';
import { useState } from 'react';
import styles from '../../../styles/MyProductsStyle';

interface Product {
    id: string,
    name: string,
    description: string,
    price: number
}

function MyProducts() {
    const [itemsFound, setItemsFound] = useState<Product[]>();
  
    const products = [
        {id: '1', name: 'Detergente', description: 'Ypê 200ml', price: 1.5},
        {id: '2', name: 'Arroz', description: 'Integral 5kg', price: 15},
        {id: '3', name: 'Iceberg de pelúcia', description: 'Azul', price: 150},
        {id: '4', name: 'Carro', description: 'Ford 2010', price: 1500}
    ]

    const screenWidth = Dimensions.get('window').width;
    const numColumns = screenWidth < 360 ? 1 : 2;

  return (
    <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Meus anúncios</Text>
            </View>

            <View style={{ width: '90%' }}>
              <SearchBar onSearchDone={setItemsFound} />
            </View>

            <View style={styles.categoryTextContainer}>
                <Text>Categoria</Text>
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
                        <MyItem
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    )}
                    {...(numColumns > 1 && { columnWrapperStyle: { justifyContent: 'center', gap: 10, marginBottom: 10 } })}
                />
            </View>
            : 
            <FlatList
              key={numColumns}
              numColumns={numColumns}
              data={products}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                      <MyItem
                          name={item.name}
                          description={item.description}
                          price={item.price}
                      />
                  )
              }
              {...(numColumns > 1 && { columnWrapperStyle: { justifyContent: 'center', gap: 10, marginBottom: 10 } })}
            />}
    </View>
  )
}

export default MyProducts