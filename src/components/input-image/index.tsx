import { useState } from 'react';
import { Alert, Image, Pressable, View, Text, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';

export default function ImageInput() {
  const [images, setImages] = useState<string[]>([]);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permissão necessária', 'A permissão para acessar a galeria é obrigatória.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const selectedUris = result.assets.map(asset => asset.uri);
      
      setImages(prevImages => [...prevImages, ...selectedUris]);
    }
  };

  const removeImage = (indexToRemove: number) => {
    setImages(prevImages => prevImages.filter((_, index) => index !== indexToRemove));
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.selectButton} onPress={pickImage}>
        <Ionicons name='image' size={30} />
        <Text>Adicionar imagens</Text>
      </Pressable>

      {images.length > 0 && (
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.scrollContainer}
        >
          {images.map((uri, index) => (
            <View key={index} style={styles.previewContainer}>
              <Pressable style={styles.removeButton} onPress={() => removeImage(index)}>
                <Text style={styles.removeButtonText}>x</Text>
              </Pressable>
              <Image source={{ uri: uri }} style={styles.image} />
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

