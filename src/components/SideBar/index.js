import React, {Component} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {Thumbnail, List, ListItem, Icon, Content} from 'native-base';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../../store/actions/auth';

const AppSideBar = (props) => {
  let {navigation} = props;
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };
  return (
    <View style={styles.sideBarContainer}>
      <ImageBackground
        style={styles.sideBarHeaderSection}
        source={require('../../assets/images/authentication.jpg')}>
        <View>
          <Thumbnail
            style={styles.sideBarHeaderSectionThumbnail}
            large
            source={require('../../assets/images/profile.png')}
          />
        </View>
        <View>
          <Text style={styles.sideBarHeaderSectionText}>Mark Zukerburg</Text>
          <Text style={styles.sideBarHeaderSectionText}>mark@gmail.com</Text>
        </View>
      </ImageBackground>
      <Content showsVerticalScrollIndicator={false}>
        <List>
          <ListItem
            style={styles.sideBarListItems}
            iconLeft
            onPress={(_) => navigation.navigate('EditProfile')}>
            <Icon style={styles.sideBarListIcons} name="md-people" />
            <Text style={styles.sideBarListText}>My Dashboard</Text>
          </ListItem>
          <ListItem style={styles.sideBarListItems} iconLeft>
            <Icon style={styles.sideBarListIcons} name="md-bookmarks" />
            <Text style={styles.sideBarListText}>Book a Chef</Text>
          </ListItem>
          <ListItem style={styles.sideBarListItems} iconLeft>
            <Icon style={styles.sideBarListIcons} name="md-settings" />
            <Text style={styles.sideBarListText}>Settings</Text>
          </ListItem>
          <ListItem onPress={logout} style={styles.sideBarListItems} iconLeft>
            <Icon style={styles.sideBarListIcons} name="md-power" />
            <Text style={styles.sideBarListText}>Log Out</Text>
          </ListItem>
          <ListItem style={styles.sideBarListItems} iconLeft>
            <Icon
              style={styles.sideBarListIcons}
              name="md-information-circle"
            />
            <Text style={styles.sideBarListText}>About Us</Text>
          </ListItem>
        </List>
      </Content>
    </View>
  );
};

export default AppSideBar;
