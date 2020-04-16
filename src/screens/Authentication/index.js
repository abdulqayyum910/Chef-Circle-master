import React, {useEffect} from 'react';
import {Text, Content, Button} from 'native-base';
import {ImageBackground, Image, View} from 'react-native';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {onAuthStateChanged, clearAll} from '../../store/actions/auth';
import {Loader} from '../../components';

import {_fbAuth, _googleAuth} from '../../store/actions/auth';

const Authentication = (props) => {
  let {navigation} = props;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  if (auth.user !== null) {
    props.navigation.navigate('Drawer');
  }

  const loginWithFacebook = () => {
    dispatch(_fbAuth(props));
  };

  const loginWithGoogle = () => {
    dispatch(_googleAuth(props));
  };

  useEffect(() => {
    dispatch(onAuthStateChanged(props));
    dispatch(clearAll());
    return () => dispatch(clearAll());
  }, []);
  return (
    <ImageBackground
      source={require('../../assets/images/authentication.jpg')}
      style={styles.backgroundImage}>
      {auth.loading ? <Loader /> : null}
      <Content pointerEvents={auth.loading ? 'none' : 'auto'}>
        <View style={styles.contentContainer}>
          <View>
            <Image
              source={require('../../assets/images/logoW.png')}
              style={styles.logoImage}
            />
          </View>
          <Text style={styles.titleText}>HERE IS YOUR CHEF</Text>
          <Button
            onPress={(_) => navigation.navigate('Login')}
            bordered
            transparent
            style={styles.loginButton}>
            <Text style={styles.loginText}>LOG IN</Text>
          </Button>
          <Button
            onPress={(_) => navigation.navigate('Signup')}
            light
            style={styles.signupButton}>
            <Text style={styles.signupText}>SIGN UP</Text>
          </Button>
          <Button onPress={loginWithFacebook} light style={styles.signupButton}>
            <Text style={styles.signupText}>LOGIN WITH FACEBOOK</Text>
          </Button>
          <Button onPress={loginWithGoogle} light style={styles.signupButton}>
            <Text style={styles.signupText}>LOGIN WITH GOOGLE</Text>
          </Button>
        </View>
      </Content>
    </ImageBackground>
  );
};

export default Authentication;
