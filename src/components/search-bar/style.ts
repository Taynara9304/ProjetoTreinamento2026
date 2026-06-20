import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
    },
    input: {
        width: "85%",
        borderRadius: 20,
        paddingLeft: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '14%',
    }
});

export default styles;