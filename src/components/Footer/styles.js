import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    footer: {
        backgroundColor: '#231f20'
    },
    footerContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    footerImage: {
        width: 35, 
        height: 35
    },
    footerText: {
        color: 'white', 
        fontSize: 9.5, 
        fontWeight:'bold', 
        marginLeft: 5
    }
});