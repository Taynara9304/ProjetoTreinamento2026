import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import styles from './style';

interface ItemProps {
    name: string,
    description: string,
    //image: any,
    price: number
}

function MyItem({ name, description, price }: ItemProps) {
  const img = require('../../assets/relogio1.png');
  
  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={{ width: 100, height: 100 }} 
      />

      <View style={styles.textContainer}>
        <Text>{name}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={{ width: '60%', paddingLeft: 20, justifyContent: 'center' }}>
          <Text style={{ fontWeight: 700, fontSize: 16 }}>R$ {price}</Text>
        </View>
        <View style={{ width: '40%', flexDirection: 'row', gap: 15 }}>
          <Ionicons name='pencil' size={26} />
          <Ionicons name='trash' size={26} />
        </View>
      </View>
    </View>
  )
}

export default MyItem;