import { View, Text } from 'react-native'
import styles from '../../styles/RecoverPasswordStyle';
import Input from '../../components/input';
import { useState } from 'react';
import Button from '../../components/button';
import { useRouter } from 'expo-router';

function RecoverPassword() {
  const router = useRouter();

  const [newPassword, setNewPassword] = useState();

  return (
    <View style={styles.container}>
      <Text>RecoverPassword</Text>
      <Input text="Nova senha" onChange={setNewPassword} />
      <Button text='Redefinir' onPress={() => {router.replace('/screens/home')}} />
    </View>
  )
}

export default RecoverPassword;