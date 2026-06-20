import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 30,
    },
    titleContainer: {
        width: '100%',
        alignItems: 'center',
        paddingLeft: 20,
        marginBottom: 60,
    },
    title: {
        fontWeight: 700,
        fontSize: 18,
    },
    productList: {
        width: '100%',
        marginBottom: 20,
        flex: 1,
        maxHeight: '50%',
    },
    priceContainer: {
        width: '79%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center',
    }
});

export default styles;