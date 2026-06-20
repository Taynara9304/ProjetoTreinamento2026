import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import Button from '../../components/button';
import styles from '../../styles/ProductDetailsStyle';

interface Product {
    id: string,
    name: string,
    description: string,
    price: number
}

function ProductDetails() {
    const [product, setProduct] = useState<Product>();

    const img = require('../../assets/relogio1.png');

    const products = [
        {id: '1', name: 'Detergente', description: 'Ypê 200ml', price: 1.5},
        {id: '2', name: 'Arroz', description: 'Integral 5kg', price: 15},
        {id: '3', name: 'Iceberg de pelúcia', description: 'Azul', price: 150},
        {id: '4', name: 'Carro', description: 'Ford 2010', price: 1500}
    ]

    const { id } = useLocalSearchParams();

    useEffect(() => {
        const prod = products.find(p => p.id === id);

        setProduct(prod);
    }, [])

  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={{ width: '100%', height: 400 }}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{product?.name}</Text>

        <Text style={styles.price}>R$ {product?.price}</Text>

        <View style={styles.descriptionContainer}>
          <Text>Descrição</Text>
          <Text>{product?.description}</Text>
        </View>
      </View>

      <View style={{ width: '100%', alignItems: 'center', bottom: 20, position: 'absolute'}}>
        <Button text='Adicionar ao carrinho' onPress={() => {}} />
      </View>
    </View>
  )
}

export default ProductDetails