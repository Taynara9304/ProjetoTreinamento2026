import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style';

interface ButtonProp {
    text: string,
    onPress: any
}

function Button({ text, onPress }: ButtonProp) {
  return (
    <TouchableOpacity
        style={styles.container}
        onPress={onPress}
    >
        <Text style={{ color: 'white', fontWeight: 700 }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button;