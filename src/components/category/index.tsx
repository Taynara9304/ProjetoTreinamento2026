import { View, Text } from 'react-native';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';

interface CategoryProps {
    name: string,
    icon: React.ComponentProps<typeof Ionicons>['name']
}

function CategoryItem({ name, icon }: CategoryProps) {
  return (
    <View style={styles.container}>
      <Ionicons
        name={icon}
        size={24}
      />
      <Text>{name}</Text>
    </View>
  )
}

export default CategoryItem;