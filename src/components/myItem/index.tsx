import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

interface ItemProps {
    name: string,
    description: string,
    //image: any,
    price: number
}

function Item({ name, description, price }: ItemProps) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>R$ {price}</Text>
      <Ionicons name='pencil' size={24} />
      <Ionicons name='trash' size={24} />

    </View>
  )
}

export default Item