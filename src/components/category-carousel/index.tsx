import { View, Text, FlatList } from 'react-native';
import CategoryItem from '../category';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';

interface CategoryInterface {
    id: string,
    name: string,
    icon: React.ComponentProps<typeof Ionicons>['name']
}

function CategoryCarousel() {
    const categories: CategoryInterface[] = [
        {id: '1', name: 'Eletrônicos', icon: 'checkbox'},
        {id: '2', name: 'Roupas', icon: 'airplane-outline'},
        {id: '3', name: 'Brinquedos', icon: 'archive-outline'},
        {id: '4', name: 'Limpeza', icon: 'accessibility'}
    ]

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <CategoryItem
                name={item.name}
                icon={item.icon}
            />
        )}
        horizontal={true}
      />
    </View>
  )
}

export default CategoryCarousel;