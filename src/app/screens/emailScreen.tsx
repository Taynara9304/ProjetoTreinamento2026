import { View, Text } from 'react-native'
import styles from '../../styles/RecoverPasswordStyle';
import Input from '../../components/input';
import { useState } from 'react';
import Button from '../../components/button';
import { useRouter } from 'expo-router';

function RecoverPassword() {
  const router = useRouter();

  const [email, setEmail] = useState<string>();

  return (
    <View style={styles.container}>
      <Input label="Email" placeholder='Digite seu email' onChange={setEmail} icon='mail-outline' />
      <Button text='Enviar email' onPress={() => {router.replace('/screens/recoverPassword')}} />
    </View>
  )
}

export default RecoverPassword;