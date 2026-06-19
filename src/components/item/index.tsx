import { Text, Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './style'
import { Image } from 'expo-image';

interface ItemProps {
    id: string,
    name: string,
    description: string,
    image: any,
    price: number
}

function Item({ id, name, description, image, price }: ItemProps) {
  const router = useRouter();

  const img = require('../../assets/relogio1.png');

  return (
    <Pressable
        style={styles.container}
        onPress={() => router.push({
            pathname: '/screens/productDetails',
            params: { id: id }
        })}
    >
      <Image
        source={img}
        style={{ width: 100, height: 100 }} 
      />

      <View style={styles.textContainer}>
        <Text>{name}</Text>
        <Text>R$ {price}</Text>
      </View>
    </Pressable>
  )
}

export default Item