import React, {useState, useEffect} from 'react';
import {
  Text,
  Content,
  Button,
  Item,
  Label,
  Textarea,
  Input,
  Icon,
} from 'native-base';
import {
  Image,
  View,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {updateProfile, clearAll} from '../../store/actions/auth';

import Geolocation from '@react-native-community/geolocation';

import {Loader} from '../../components';

const EditProfile = (props) => {
  const auth = useSelector((state) => state.auth);
  let {user} = auth;

  const [state, setState] = useState({
    fullname: user ? user.name : '',
    email: user ? user.email : '',
    bio: user ? user.bio : '',
    location: user ? user.location : null,
    phoneNo: user ? user.phoneNo : '',
  });

  const dispatch = useDispatch();

  const onChangeEmail = (text) => {
    setState({...state, email: text});
  };
  const onChangePhoneNo = (text) => {
    setState({...state, phoneNo: text});
  };
  const onChangeName = (text) => {
    setState({...state, fullname: text});
  };
  const onChangeBiography = (text) => {
    setState({...state, bio: text});
  };
  const getLocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Chef's Circle",
          message: "Chef's Circle App needs access to your location ",

          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        return Alert.alert(
          'Insufficiant Permission!',
          'you need to grant location permission to access location',
          [{text: 'Ok'}],
        );
      }

      Geolocation.getCurrentPosition((position) => {
        let location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setState({...state, location});
      });
    } catch (err) {
      console.log(err);
    }
  };

  const update = () => {
    const {email, fullname, bio, phoneNo, location} = state;

    if (!email || !fullname || !bio || !phoneNo || location === null) {
      return Alert.alert('Sorry can not update', 'Required all fields', [
        {text: 'okay'},
      ]);
    }

    let updatedUser = {
      email,
      fullname,
      bio,
      phoneNo,
      location,
    };
    dispatch(updateProfile(user.key, updatedUser, props));
  };

  const Error = () => {
    return (
      <Text
        style={{
          color: auth.success ? 'green' : 'red',
          fontSize: 20,
          marginTop: 20,
        }}>
        {auth.message}
      </Text>
    );
  };

  useEffect(() => {
    dispatch(clearAll());
    return () => dispatch(clearAll());
  }, []);

  let {fullname, email, location, phoneNo, bio} = state;
  return (
    <>
      {auth.loading ? <Loader /> : null}
      <Content pointerEvents={auth.loading ? 'none' : 'auto'}>
        <TouchableOpacity style={styles.editProfileContainer}>
          <Icon name="md-color-filter" />
          <Text style={styles.editProfileText}> Edit Profile</Text>
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <View>
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.contentContainerImage}
            />
          </View>
          <Error />

          <View style={styles.itemsContainer}>
            <Item
              //floatingLabel
              style={styles.formItems}>
              <Icon style={styles.formIcons} name="md-person" />
              <Label style={styles.formLabels}>FULL NAME</Label>
              <Input onChangeText={onChangeName} value={fullname} />
            </Item>
            <Item
              //floatingLabel
              style={styles.formItems}>
              <Icon style={styles.formIcons} name="md-call" />
              <Label style={styles.formLabels}>PHONE NUMBER</Label>
              <Input
                onChangeText={onChangePhoneNo}
                value={phoneNo}
                keyboardType="number-pad"
              />
            </Item>
            <Item
              //  floatingLabel
              style={styles.formItems}>
              <Icon style={styles.formIcons} name="md-mail" />
              <Label style={styles.formLabels}>EMAIL ADDRESS</Label>
              <Input onChangeText={onChangeEmail} value={email} />
            </Item>
            <Item regular style={styles.formItems}>
              <Icon style={styles.formIcons} name="md-navigate" />
              <Input
                value={location ? location.lng.toString() : ''}
                disabled
                defaultValue="Current Location"
              />
              <Button onPress={getLocation} dark icon>
                <Icon type="FontAwesome" name="map-marker" />
              </Button>
            </Item>
            <View style={styles.breifBioContainer}>
              <Icon style={styles.formIcons} name="md-create" />
              <Label style={styles.formLabels}> BRIEF BIOGRAPHY</Label>
            </View>
            <Textarea
              onChangeText={onChangeBiography}
              value={bio}
              rowSpan={5}
              bordered
              placeholder="Biography"
            />
          </View>
          <Text>{'\n'}</Text>
          <Button dark style={styles.updateButton} onPress={update}>
            <Text style={styles.updateText}>UPDATE</Text>
          </Button>
        </View>
      </Content>
    </>
  );
};

export default EditProfile;
