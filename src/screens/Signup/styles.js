import { StyleSheet } from 'react-native';
import { screenWidth } from '../../constants/screen';

export default StyleSheet.create({
    contentContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    headerText: {
        alignItems: 'center'
    },
    header1: {
        fontWeight: "bold",
        fontSize: 35
    },
    header2: {
        marginTop: 7,
        fontSize: 20
    },
    itemsContainer: {
        marginTop: 30
    },
    formItems: {
        width: screenWidth / 1.3,
        marginBottom: 30
    },
    formIcons: {
        fontSize: 30
    },
    formLabels: {
        textAlign: 'center'
    },
    confirmationTextContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 20,
        width: screenWidth / 1.2
    },
    confirmationText: {
        fontSize: 13,
        marginLeft: 20
    },
    signupButton: {
        borderRadius: 30,
        width: screenWidth / 1.3,
        justifyContent: 'center'
    },
    signupText: {
        fontSize: 15
    },
    bottomTextContainer: {
        marginTop: 40,
        flexDirection: 'row'
    },
    loginBold: {
        fontWeight: 'bold'
    }
});