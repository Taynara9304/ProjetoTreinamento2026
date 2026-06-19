import { View, Text } from 'react-native'
import { useState } from 'react'
import Input from '../../../components/input';
import styles from '../../../styles/RegisterUserStyle';
import Button from '../../../components/button';
import { useRouter } from 'expo-router';
import ImageInput from '../../../components/input-image';

function RegisterItem() {
    const router = useRouter();

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [price, setPrice] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text>RegisterItem</Text>

      <Input label='Título' placeholder='Digite o título do anúncio' onChange={setName} />
      <Input label='Descrição' placeholder='Adicione um descrição detalhada' onChange={setDescription} />
      <Input label='Imagem' placeholder='Adicione uma imagem' onChange={setImage} />
      <Input label='Preço' placeholder='Preço R$' onChange={setPrice} />

      <ImageInput />

      <Button text='Cadastrar item' onPress={() => {router.push('/screens/home')}} />
    </View>
  )
}

export default RegisterItem;