import {Platform, StyleSheet} from 'react-native';
import Variables from '../../styles'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Variables.colors.lighter
    },
    header: { 
        backgroundColor: Variables.colors.primary,
        borderBottomWidth: 0.3,
        borderColor: Variables.colors.gray,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginTop: 0
    },
    headerText: {
        textAlign: "center",
        color: Variables.colors.white,
        fontSize: 18,
        fontWeight: "500"
    }
});

export default styles;