import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Screens from '../screens';
import * as Components from '../components';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class StackComp extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Screens.Home}
          options={{
            header: (props) => <Components.AppHeader title="Home" {...props} />,
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={Screens.EditProfile}
          options={{
            header: (props) => (
              <Components.AppHeader title="Edit Profile" {...props} />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}

class DrawerComp extends Component {
  render() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <Components.AppSideBar {...props} />}>
        <Drawer.Screen name="Drawer" component={StackComp} />
      </Drawer.Navigator>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Authentication">
        <Stack.Screen
          name="Authentication"
          component={Screens.Authentication}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Screens.Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Screens.Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerComp}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default Navigation;
