import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '../../components/button';
import styles from '../../styles/HomeStyle';

function Home() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button text='logout' onPress={() => router.replace('/screens/login')} />
        </View>
    )
}

export default Home