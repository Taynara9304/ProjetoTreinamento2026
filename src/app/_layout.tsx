import { Stack } from "expo-router";

function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="screens/home" options={{headerShown: false}} />
        <Stack.Screen name="screens/login" options={{headerShown: false}} />
        <Stack.Screen name="screens/recoverPassword" options={{headerShown: false}} />
        <Stack.Screen name="screens/registerUser" options={{headerShown: false}} />
    </Stack>
  );
};

export default RootLayout;