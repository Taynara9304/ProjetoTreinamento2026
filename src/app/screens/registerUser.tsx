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

  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Input text='Nome' onChange={setName} />
      <Input text='Email' onChange={setEmail} />
      <Input text='Senha' onChange={setPassword} />

      <Button text='Registrar' onPress={() => {router.push('/screens/login')}} />
    </View>
  );
}

export default Login;