import React, { Component } from 'react';
import { Footer, Text } from 'native-base';
import { View, Image } from 'react-native';
import styles from './styles';

class AppFooter extends Component {

    render() {
        return (
            <Footer style={styles.footer}>
                <View style={styles.footerContainer}>
                    <Image source={require('../../assets/images/logoW.png')} style={styles.footerImage} />
                    <Text style={styles.footerText}>“ BUILD YOUR MENU. BUILD YOUR SCHEDULE. BUILD YOUR LEGACY "</Text>
                </View>
            </Footer>
        );
    }
}

export default AppFooter;