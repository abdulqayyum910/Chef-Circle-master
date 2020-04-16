import React, {useState, useEffect} from 'react';
import {Text, Content, Button, Item, Label, Input, Icon} from 'native-base';
import {Image, View, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';

import {loginUser, clearAll, forgetPassword} from '../../store/actions/auth';
import {useDispatch, useSelector} from 'react-redux';

import {Loader} from '../../components';

const Login = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  let {navigation} = props;

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const onChangeEmail = (text) => {
    setState({...state, email: text});
  };
  const onChangePassword = (text) => {
    setState({...state, password: text});
  };

  const login = () => {
    // navigation.navigate('Drawer')
    {
      !state.email && state.password
        ? Alert.alert('Invalid!', 'Email is required', [{text: 'okay'}])
        : null;
    }

    {
      state.email && !state.password
        ? Alert.alert('Invalid!', 'Password is required', [{text: 'okay'}])
        : null;
    }
    {
      !state.email && !state.password
        ? Alert.alert('Invalid!', 'Email  And Password is required', [
            {text: 'okay'},
          ])
        : null;
    }

    if (state.email && state.password) {
      const credential = {
        email: state.email,
        password: state.password,
      };
      dispatch(clearAll());
      dispatch(loginUser(credential, props));
      setState({email: '', password: ''});
    }
  };

  const Error = () => {
    return (
      <Text
        style={{
          color: auth.success ? 'green' : 'red',
          fontSize: 18,
          marginBottom: 10,
        }}>
        {auth.message}
      </Text>
    );
  };

  useEffect(() => {
    if (auth.success) {
      return Alert.alert('Success!!!', auth.message, [{text: 'Okay'}]);
    }

    dispatch(clearAll());

    return () => {
      dispatch(clearAll());
    };
  }, []);

  const {email, password} = state;

  return (
    <>
      {auth.loading ? <Loader /> : null}
      <Content pointerEvents={auth.loading ? 'none' : 'auto'}>
        <View style={styles.contentContainer}>
          <View>
            <Image
              source={require('../../assets/images/logoB.png')}
              style={styles.logoImage}
            />
          </View>
          <View style={styles.itemsContainer}>
            <Error />
            <Item style={styles.formItems}>
              <Icon style={styles.formIcons} name="md-mail" />
              <Label style={styles.formLabels}>EMAIL</Label>
              <Input value={email} onChangeText={onChangeEmail} />
            </Item>
            <Item style={styles.formItems}>
              <Icon style={styles.formIcons} name="md-lock" />
              <Label style={styles.formLabels}>PASSWORD</Label>
              <Input
                value={password}
                secureTextEntry={true}
                onChangeText={onChangePassword}
              />
            </Item>
          </View>
          <Button dark style={styles.loginButton} onPress={login}>
            <Text style={styles.loginText}>LOG IN</Text>
          </Button>
          <TouchableOpacity
            onPress={() => dispatch(forgetPassword('abduqayyum123@gmail.com'))}>
            <Text style={styles.forgetPassword}>FORGOT PASSWORD?</Text>
          </TouchableOpacity>
          <View style={styles.bottomTextContainer}>
            <Text>NO ACCOUNT? </Text>
            <TouchableOpacity onPress={(_) => navigation.navigate('Signup')}>
              <Text style={styles.signupBold}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </>
  );
};

export default Login;
