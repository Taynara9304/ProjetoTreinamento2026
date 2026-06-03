import { View, Text } from 'react-native'
import { useState } from 'react'
import Input from '../../components/input';
import styles from '../../styles/RegisterUserStyle';
import Button from '../../components/button';
import { useRouter } from 'expo-router';
import ImageInput from '../../components/input-image';

function RegisterItem() {
    const router = useRouter();

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [price, setPrice] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text>RegisterItem</Text>

      <Input text='Nome do item' onChange={setName} />
      <Input text='Descrição' onChange={setDescription} />
      <Input text='Adicione uma imagem' onChange={setImage} />
      <Input text='Preço R$' onChange={setPrice} />

      <ImageInput />

      <Button text='Cadastrar item' onPress={() => {router.push('/screens/home')}} />
    </View>
  )
}

export default RegisterItem;