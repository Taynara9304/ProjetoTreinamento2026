import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native'

interface Product {
    id: string,
    name: string,
    description: string,
    price: number
}

function ProductDetails() {
    const [product, setProduct] = useState<Product>();

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
    <View>
      <Text>ProductDetails</Text>
      <Text>{product?.name}</Text>
      <Text>{product?.description}</Text>
      <Text>{product?.price}</Text>
    </View>
  )
}

export default ProductDetails