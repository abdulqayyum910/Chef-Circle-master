import { StyleSheet } from 'react-native';
import { screenWidth } from '../../constants/screen';

export default StyleSheet.create({
    backgroundImage: {
        flex: 1
    },
    contentContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoImage: {
        width: 150,
        height: 150,
        marginTop: 100
    },
    titleText: {
        fontSize: 25,
        marginTop: 50,
        color: 'white'
    },
    loginButton: {
        borderColor: 'white',
        marginTop: 20,
        borderRadius: 30,
        width: screenWidth / 1.3,
        justifyContent: 'center'
    },
    loginText: {
        fontSize: 15,
        color: 'white'
    },
    signupButton: {
        color: "white",
        marginTop: 20,
        borderRadius: 30,
        width: screenWidth / 1.3,
        justifyContent: 'center'
    },
    signupText: {
        fontSize: 15
    }
});