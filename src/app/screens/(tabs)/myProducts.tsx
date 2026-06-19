import { View, Text, FlatList } from 'react-native'
import Item from '../../../components/myItem'

function MyProducts() {
    const products = [
        {id: '1', name: 'Detergente', description: 'Ypê 200ml', price: 1.5},
        {id: '2', name: 'Arroz', description: 'Integral 5kg', price: 15},
        {id: '3', name: 'Iceberg de pelúcia', description: 'Azul', price: 150},
        {id: '4', name: 'Carro', description: 'Ford 2010', price: 1500}
    ]

  return (
    <View>
      <Text>MyProducts</Text>

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
                <Item
                    name={item.name}
                    description={item.description}
                    price={item.price}
                />
            )
        }
      />
    </View>
  )
}

export default MyProducts