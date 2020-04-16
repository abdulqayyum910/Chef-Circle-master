import { StyleSheet } from 'react-native';
import { screenHeight } from '../../constants/screen';

export default StyleSheet.create({
    sideBarContainer: {
        flex: 1
    },
    sideBarHeaderSection: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: screenHeight / 3.8
    },
    sideBarHeaderSectionThumbnail: {
        borderWidth: 3, 
        borderColor: 'white'
    },
    sideBarHeaderSectionText: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    sideBarListItems: {
        borderBottomColor: 'transparent'
    },
    sideBarListIcons: {
        color: '#231f20'
    },
    sideBarListText: {
        marginLeft: 10,
        color: '#231f20',
        fontWeight: 'bold'
    },

})