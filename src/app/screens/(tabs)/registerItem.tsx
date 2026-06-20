import { View, Text } from 'react-native'
import { useState } from 'react'
import Input from '../../../components/input';
import styles from '../../../styles/RegisterItemStyle';
import Button from '../../../components/button';
import { useRouter } from 'expo-router';
import ImageInput from '../../../components/input-image';
import DropdownInput from '../../../components/dropdown-input';

function RegisterItem() {
    const router = useRouter();

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    const categorias = ['Mercado', 'Limpeza', 'Eletrônicos', 'Roupas'];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Anunciar produto</Text>
      </View>

      <Input label='Título' placeholder='Digite o título do anúncio' onChange={setName} />
      <ImageInput />
      <Input label='Descrição' placeholder='Adicione um descrição detalhada' onChange={setDescription} />
      <Input label='Preço' placeholder='Preço R$' onChange={setPrice} />
      <DropdownInput label='Categoria' placeholder='Selecione uma categoria' options={categorias} onSelect={(valor) => console.log(valor)} />

      <Button text='Anunciar produto' onPress={() => {router.push('/screens/home')}} />
    </View>
  )
}

export default RegisterItem;