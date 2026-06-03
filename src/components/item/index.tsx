import { View, Text } from 'react-native'
import styles from './style'

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
    </View>
  )
}

export default Item