import { useState } from 'react';
import { Alert, Image, Pressable, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './style';

export default function ImagePickerExample() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access the media library is required.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <View style={styles.container}>
      {image && (
        <View style={styles.previewContainer}>

          <Pressable style={styles.removeButton} onPress={removeImage}>
            <Text style={styles.removeButtonText}>x</Text>
          </Pressable>
          
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      )}

      <Pressable onPress={pickImage}>
        <Text>Selecione uma imagem</Text>
      </Pressable>
    </View>
  );
}

