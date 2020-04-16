import React, {useState, useEffect} from 'react';
import {
  Text,
  Content,
  CheckBox,
  Button,
  Icon,
  Item,
  Label,
  Input,
} from 'native-base';
import {View, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {clearAll, registerUser} from '../../store/actions/auth';

import {Loader} from '../../components';

const Signup = (props) => {
  const [state, setState] = useState({
    check: false,
    email: '',
    password: '',
    fullname: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onChangeName = (text) => {
    setState({...state, fullname: text});
  };
  const onChangeEmail = (text) => {
    setState({...state, email: text});
  };
  const onChangePassword = (text) => {
    setState({...state, password: text});
  };
  const onChangeCnfrmPass = (text) => {
    setState({...state, confirmPassword: text});
  };

  const signUp = () => {
    // navigation.navigate('Drawer')

    const {fullname, email, password, confirmPassword, check} = state;
    if (!email && !password && !fullname) {
      return Alert.alert('Invalid!', 'All fields are required', [
        {text: 'okay'},
      ]);
    }

    if (!email && password) {
      return Alert.alert('Invalid!', 'Email is required', [{text: 'okay'}]);
    }
    if (!email) {
      return Alert.alert('Invalid!', 'Email is required', [{text: 'okay'}]);
    }

    if (!password) {
      return Alert.alert('Invalid!', 'Password is required', [{text: 'okay'}]);
    }

    if (email && !password) {
      return Alert.alert('Invalid!', 'Password is required', [{text: 'okay'}]);
    }

    if (!fullname) {
      return Alert.alert('Invalid!', 'Fullname  is required', [{text: 'okay'}]);
    }

    if (confirmPassword !== password) {
      return Alert.alert('Invalid!', 'Password does not match', [
        {text: 'okay'},
      ]);
    }
    if (!check) {
      return Alert.alert('Sorry!', 'Please agree with term and condition', [
        {text: 'okay'},
      ]);
    }

    if (email && password && check && confirmPassword === password) {
      const credential = {
        fullname,
        email,
        password,
      };
      dispatch(clearAll());
      dispatch(registerUser(credential, props));
      setState({
        email: '',
        password: '',
        fullname: '',
        confirmPassword: '',
        check: false,
      });
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
    return () => dispatch(clearAll());
  }, []);

  let {check, fullname, email, password, confirmPassword} = state;
  let {navigation} = props;

  return (
    <>
      {auth.loading ? <Loader /> : null}
      <Content pointerEvents={auth.loading ? 'none' : 'auto'}>
        <View style={styles.contentContainer}>
          <View style={styles.headerText}>
            <Text style={styles.header1}>REGISTER</Text>
            <Text style={styles.header2}>IT'S COMPLETELY FREE!</Text>
          </View>
          <View style={styles.itemsContainer}>
            <Error />
            <Item //floatingLabel
              style={styles.formItems}>
              <Icon style={styles.formIcons} name="md-person" />
              <Label style={styles.formLabels}>FULL NAME</Label>
              <Input value={fullname} onChangeText={onChangeName} />
            </Item>
            <Item //floatingLabel
              last
              style={styles.formItems}>
              <Icon style={styles.formIcons} name="md-mail" />
              <Label style={styles.formLabels}>EMAIL ADDRESS</Label>
              <Input value={email} onChangeText={onChangeEmail} />
            </Item>
            <Item //floatingLabel
              last
              style={styles.formItems}>
              <Icon style={styles.formIcons} name="md-lock" />
              <Label style={styles.formLabels}>PASSWORD</Label>
              <Input
                secureTextEntry={true}
                value={password}
                onChangeText={onChangePassword}
              />
            </Item>
            <Item
              //floatingLabel
              last
              style={styles.formItems}>
              <Icon style={styles.formIcons} name="md-lock" />
              <Label style={styles.formLabels}>CONFIRM PASSWORD</Label>
              <Input
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={onChangeCnfrmPass}
              />
            </Item>
          </View>
          <View style={styles.confirmationTextContainer}>
            <CheckBox
              onPress={(_) => setState({...state, check: !check})}
              checked={check}
              color="#231f20"
            />
            <Text style={styles.confirmationText}>
              By clicking Sign Up, you agree to our {'\n'}
              Terms, Data Policy and Cookie Policy.{'\n'}
              You may receive SMS notifications{'\n'}
              from us and can opt out at any time.
            </Text>
          </View>
          <Button dark style={styles.signupButton} onPress={signUp}>
            <Text style={styles.signupText}>SIGN UP</Text>
          </Button>
          <View style={styles.bottomTextContainer}>
            <Text>HAVE ACCOUNT? </Text>
            <TouchableOpacity onPress={(_) => navigation.navigate('Login')}>
              <Text style={styles.loginBold}>LOG IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </>
  );
};

export default Signup;
