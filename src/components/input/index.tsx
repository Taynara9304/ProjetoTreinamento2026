import { View, Text, TextInput } from 'react-native'
import styles from './style';
import { Ionicons } from '@expo/vector-icons';

interface InputProps {
    label: string,
    placeholder: string;
    onChange: (text: string) => void;
    icon?: React.ComponentProps<typeof Ionicons>['name']; 
}

function Input({ label, icon, placeholder, onChange }: InputProps) {
  return (
      <View style={styles.container}>
          <Text style={styles.text}>{label}</Text>
          <View style={styles.inputContainer}>
              {icon && <Ionicons
                  name={icon}
                  style={styles.icon}
                  size={24}
              />}

              <TextInput
                onChangeText={onChange}
                style={styles.input}
                placeholder={placeholder}
              />
          </View>
      </View>
  )
}

export default Input;