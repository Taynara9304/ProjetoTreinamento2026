import { Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './style'

interface ItemProps {
    id: string,
    name: string,
    description: string,
    //image: any,
    price: number
}

function Item({ id, name, description, price }: ItemProps) {
  const router = useRouter();

  return (
    <Pressable
        style={styles.container}
        onPress={() => router.push({
            pathname: '/screens/productDetails',
            params: { id: id}
        })}
    >
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>R$ {price}</Text>
    </Pressable>
  )
}

export default Item