import React, { Component } from 'react';
import { Button, Header, Left, Right, Body, Title, Icon } from 'native-base';
import styles from './styles';

class AppHeader extends Component {

    render() {
        let { title, navigation } = this.props;
        return (
            <Header androidStatusBarColor="#383133" style={styles.header}>
                <Left style={styles.headerLeft}>
                    <Button transparent onPress={_ => navigation.openDrawer()}>
                        <Icon name="md-menu" style={styles.headerIcons} />
                    </Button>
                </Left>
                <Body style={styles.headerBody}>
                    <Title>{title || ""}</Title>
                </Body>
                <Right style={styles.headerRight}>
                    <Button transparent>
                        <Icon name="md-search" style={styles.headerIcons} />
                    </Button>
                </Right>
            </Header>
        );
    }
}

export default AppHeader;