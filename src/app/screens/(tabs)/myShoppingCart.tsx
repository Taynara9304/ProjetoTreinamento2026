import { View, Text, FlatList } from 'react-native'
import CartItem from '../../../components/cart-item';
import styles from '../../../styles/MyShoppingCart';
import { useState } from 'react';
import Button from '../../../components/button';

function MyShoppingCart() {
    const [total, setTotal] = useState<number>(150);

    const products = [
        {id: '1', name: 'Detergente', description: 'Ypê 200ml', price: 1.5},
        {id: '2', name: 'Arroz', description: 'Integral 5kg', price: 15},
        {id: '3', name: 'Iceberg de pelúcia', description: 'Azul', price: 150},
        {id: '4', name: 'Carro', description: 'Ford 2010', price: 1500}
    ]

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Carrinho</Text>
      </View>

      <View style={styles.productList}>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          ListEmptyComponent={<Text>Nenhum produto listado.</Text>}
          renderItem={({ item }) => (
                  <CartItem
                      name={item.name}
                      description={item.description}
                      price={item.price}
                  />
              )
          }
        />
      </View>

      <View style={styles.priceContainer}>
          <Text style={{ fontWeight: 700, fontSize: 16}}>Total</Text>
          <Text style={{ fontWeight: 700, fontSize: 16, color: '#F16A26'}}>R$ {total}</Text>
      </View>

      <View style={{ width: '100%', alignItems: 'center', marginTop: 20, }}>
        <Button text='Comprar agora' onPress={'bomdia'} />
      </View>
    </View>
  )
}

export default MyShoppingCart;