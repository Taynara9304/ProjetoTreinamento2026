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
        <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button;