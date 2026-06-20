import { Tabs, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function Tab() {
    const router = useRouter();

    function handleLogout() {
        router.replace('/');
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <Tabs
                    screenOptions={{
                        tabBarActiveTintColor: '#F16A26',
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: '#ffffff',
                            height: 60,
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            elevation: 0,
                            borderTopWidth: 0,
                        },
                    }}
                >
                    <Tabs.Screen
                        name='home'
                        options={{
                            tabBarIcon: ({ color }) => <Ionicons name='home' size={28} color={color} />,
                            tabBarShowLabel: false,
                        }}
                    />

                    <Tabs.Screen
                        name='myShoppingCart'
                        options={{
                            tabBarIcon: ({ color }) => <Ionicons name='cart-outline' size={28} color={color} />,
                            tabBarShowLabel: false,
                        }}
                    />

                    <Tabs.Screen
                        name='registerItem'
                        options={{
                            tabBarIcon: ({ color }) => <Ionicons name='add-circle' size={28} color={color} />,
                            tabBarShowLabel: false,
                        }}
                    />

                    <Tabs.Screen
                        name='myProducts'
                        options={{
                            tabBarIcon: ({ color }) => <Ionicons name='storefront-outline' size={28} color={color} />,
                            tabBarShowLabel: false,
                        }}
                    />

                    <Tabs.Screen
                        name='logout'
                        options={{
                            tabBarShowLabel: false,
                            tabBarButton: (props) => {
                                const { ref, ...restProps } = props;

                                const isSelected = props.accessibilityState?.selected;
                                const iconColor = isSelected ? '#F16A26' : '#8E8E93';

                                return (
                                    <Pressable 
                                        {...restProps} 
                                        onPress={handleLogout}
                                    >
                                        <Ionicons name='log-out-outline' size={28} color={iconColor} />
                                    </Pressable>
                                )
                            },
                        }}
                    />
                </Tabs>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default Tab;