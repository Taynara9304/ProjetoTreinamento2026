import { Text, View } from 'react-native';
import styles from '../../styles/LoginStyle';
import Input from '../../components/input';
import Button from '../../components/button';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text>Faça login</Text>

      <Input text="Email" onChange={setEmail} />
      <Input text="Senha" onChange={setPassword} />

      <Link href={'/screens/recoverPassword'} >Esqueceu a senha? Clique aqui!</Link>

      <Button text="Fazer login"  onPress={() => {router.replace('/screens/home')}} />
      <Button text="Criar conta" onPress={() => {router.push('/screens/registerUser')}} />
    </View>
  );
}
