import { View, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import styles from './style';

interface CartItemProps {
    name: string,
    description: string,
    //image: any,
    price: number
}

function CartItem({ name, description, price }: CartItemProps) {
    const img = require('../../assets/relogio1.png');

    return (
        <View style={styles.container}>
            <Image
                source={img}
                style={{ width: 100, height: 80 }} 
            />

            <View style={{ width: '60%' }}>
                <View>
                    <Text>{name}</Text>
                    <Text>{description}</Text>
                    <Text>R$ {price}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Pressable><Text style={{ color: '#F16A26' }}>+</Text></Pressable>
                        <Text>1</Text>
                        <Pressable><Text style={{ color: '#F16A26' }}>-</Text></Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CartItem;