import { StyleSheet } from 'react-native';
import { screenWidth } from '../../constants/screen';

export default StyleSheet.create({
    editProfileContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        marginTop: 10, 
        marginRight: 10
    },
    editProfileText: {
        fontWeight: 'bold', 
        fontSize: 15
    },
    contentContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    contentContainerImage: {
        width: 150, 
        height: 150, 
        borderWidth: 5, 
        borderColor: '#231f20', 
        borderRadius: 100
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
    breifBioContainer: {
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    updateButton: {
        borderRadius: 30,
        width: screenWidth / 1.3,
        justifyContent: 'center'
    },
    updateText: {
        fontSize: 15
    }
});