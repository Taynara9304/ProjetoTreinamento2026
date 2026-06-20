import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <Stack>
              <Stack.Screen name="index" options={{title: 'Login'}} />
              <Stack.Screen name="screens/login" options={{headerShown: false}} />
              <Stack.Screen name="screens/emailScreen" options={{title: 'Recuperar senha'}} />
              <Stack.Screen name="screens/recoverPassword" options={{title: 'Crie uma nova senha'}} />
              <Stack.Screen name="screens/registerUser" options={{title: 'Cadastre-se'}} />
              <Stack.Screen name="screens/(tabs)" options={{ headerShown: false }} />
          </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootLayout;