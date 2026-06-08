import { Text, View } from 'react-native';
import styles from '../../styles/RegisterUserStyle';
import Input from '../../components/input';
import { useState } from 'react';
import Button from '../../components/button';
import { useRouter } from 'expo-router';

function Login() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>();

  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Input label='Nome' placeholder='Digite seu nome' onChange={setName} icon='person-outline'  />
      <Input label='Email' placeholder='Digite seu nome' onChange={setEmail} icon='mail-outline' />
      <Input label='Senha' placeholder='Digite seu nome' onChange={setPassword} icon='lock-closed-outline' />
      <Input label='Confirmação de senha' placeholder="Confirme sua senha" onChange={setPasswordConfirmation} icon='lock-closed-outline' />

      <Button text='Registrar' onPress={() => {router.push('/screens/login')}} />
    </View>
  );
}

export default Login;