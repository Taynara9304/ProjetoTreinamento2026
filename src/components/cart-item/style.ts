import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 100,
        alignSelf: 'center',
        marginBottom: 10,
        borderRadius: 20,
        flexDirection: 'row',
        gap: 20,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
    },
    button: {
        flexDirection: 'row',
        width: 50,
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: 10,
        alignSelf: 'flex-end',
        borderWidth: 1,
        borderColor: '#F16A26',
    },
});

export default styles;