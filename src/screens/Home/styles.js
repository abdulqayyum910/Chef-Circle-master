import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    bannerPageIndicatorContainer: {
        top: 15,
        right: 10
    },
    bannerPageIndicator: {
        padding: 5,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white'
    },
    bannerActivePageIndicator: {
        backgroundColor: 'white'
    },
    bannerImages: {
        width: '100%', 
        height: 200, 
        resizeMode: 'stretch'
    },
    headings: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        marginTop: 25
    },
    iframe: {
        marginTop: 20, 
        width: '100%', 
        height: 200
    },
    carouselContainer: {
        flex: 1, 
        flexDirection: 'row', 
        marginTop: 20
    },
    carouselItemsContainer: {
        padding: 2
    },
    carouselItemsImage: {
        width: '100%', 
        height: 120, 
        borderRadius: 20
    },
    carouselItemsIcon: {
        textAlign: 'center', 
        marginVertical: 5
    },
    carouselItemsText: {
        textAlign: 'center'
    },
    popularMealTextContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-evenly'
    },
    popularMealPriceContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    carouselOldPrice: {
        textDecorationLine: 'line-through', 
        fontWeight: 'bold'
    },
    carouselDiscountBadge: {
        position: 'absolute', 
        top: -10, 
        left: 23, 
        backgroundColor: 'white', 
        borderWidth: 2, 
        borderColor: '#231f20'
    },
    carouselDiscountText: {
        color: '#231f20'
    }
});