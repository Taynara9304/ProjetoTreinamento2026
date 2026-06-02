import { View, Text, TextInput } from 'react-native'
import styles from './style';

interface InputProps {
    text: string,
    onChange: any
}

function Input({ text, onChange }: InputProps) {
  return (
      <TextInput
        onChange={onChange}
        style={styles.container}
        placeholder={text}
      />
  )
}

export default Input;