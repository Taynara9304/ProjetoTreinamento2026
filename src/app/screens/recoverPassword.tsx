import { View, Text } from 'react-native'
import styles from '../../styles/RecoverPasswordStyle';
import Input from '../../components/input';
import { useState } from 'react';
import Button from '../../components/button';
import { useRouter } from 'expo-router';

function RecoverPassword() {
  const router = useRouter();

  const [newPassword, setNewPassword] = useState<string>();
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>();

  return (
    <View style={styles.container}>
      <Text>RecoverPassword</Text>
      <Input label="Nova senha" placeholder='Digite sua nova senha' onChange={setNewPassword} icon='lock-closed-outline' />
      <Input label='Confirmação de senha' placeholder="Confirme sua senha" onChange={setPasswordConfirmation} icon='lock-closed-outline' />
      <Button text='Redefinir' onPress={() => {router.replace('/screens/home')}} />
    </View>
  )
}

export default RecoverPassword;