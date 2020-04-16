import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {GoogleSignin} from 'react-native-google-signin';

import firebase, {firestore} from 'react-native-firebase';
import {
  LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ALL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  UPDATE_SUCCESS,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
} from './types';

export const registerUser = (credential, props) => async (dispatch) => {
  dispatch({type: LOADING});
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(credential.email, credential.password);

    let uid = res.user.uid;

    await firestore().collection('users').add({
      name: credential.fullname,
      email: credential.email,
      password: credential.password,
      user: uid,
    });
    const user = await firestore().collection('users').get();

    for (const doc of user.docs) {
      if (uid === doc.data().user) {
        const data = doc.data();
        data.key = doc.id;
        dispatch({type: REGISTER_SUCCESS, payload: data});
        props.navigation.navigate('Drawer');
      }
    }
  } catch (err) {
    if (
      err.message === 'The email address is already in use by another account.'
    ) {
      return dispatch({type: REGISTER_FAIL, payload: err.message});
    }
    dispatch({type: REGISTER_FAIL, payload: 'Server Error'});
  }
};

export const onAuthStateChanged = (props) => (dispatch) => {
  firebase.auth().onAuthStateChanged(async function (user) {
    if (user) {
      // User is signed in.
      const data = await firestore().collection('users').get();

      for (const doc of data.docs) {
        if (user.uid === doc.data().user) {
          const data = doc.data();
          data.key = doc.id;
          dispatch({type: LOGIN_SUCCESS, payload: data});
          props.navigation.navigate('Drawer');
        }
      }
    } else {
      // No user is signed in.
      dispatch({type: LOGOUT});
      props.navigation.navigate('Authentication');
    }
  });
};

export const loginUser = (credential, props) => async (dispatch) => {
  dispatch({type: LOADING});

  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(credential.email, credential.password);

    let uid = res.user.uid;

    const user = await firestore().collection('users').get();

    for (const doc of user.docs) {
      if (uid === doc.data().user) {
        const data = doc.data();
        data.key = doc.id;
        dispatch({type: LOGIN_SUCCESS, payload: data});
        props.navigation.navigate('Drawer');
      }
    }
  } catch (err) {
    dispatch({type: LOGIN_FAIL});
  }
};

export const updateProfile = (key, updateProfile, props) => async (
  dispatch,
) => {
  dispatch({type: LOADING});
  try {
    await firestore().collection('users').doc(key).update(updateProfile);
    dispatch({type: UPDATE_SUCCESS});
    props.navigation.navigate('Drawer');
    // if (uid === doc.data().user) {
    //   dispatch({type: LOGIN_SUCCESS, payload: doc.data()});
    //   props.navigation.navigate('Drawer');
    // }
  } catch (err) {}
};

export const _fbAuth = (props) => async (dispatch) => {
  dispatch({type: LOADING});
  try {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      // handle this however suites the flow of your app
      throw new Error('User cancelled request');
    }

    console.log(
      `Login success with permissions: ${result.grantedPermissions.toString()}`,
    );

    // get the access token
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      // handle this however suites the flow of your app
      throw new Error('Something went wrong obtaining the users access token');
    }

    // create a new firebase credential with the token
    const credential = firebase.auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    //login with credential
    const firebaseUserCredential = await firebase
      .auth()
      .signInWithCredential(credential);

    const isUser = await firestore().collection('users').get();

    for (const doc of isUser.docs) {
      if (doc.data().email === firebaseUserCredential.user.email) {
        const data = doc.data();
        data.key = doc.id;
        return dispatch({type: REGISTER_SUCCESS, payload: data});
      }
    }

    await firestore().collection('users').add({
      profile: firebaseUserCredential.user.photoURL,
      name: firebaseUserCredential.user.displayName,
      email: firebaseUserCredential.user.email,
      user: firebaseUserCredential.user.uid,
    });
    const user = await firestore().collection('users').get();

    for (const doc of user.docs) {
      if (firebaseUserCredential.user.uid === doc.data().user) {
        const data = doc.data();
        data.key = doc.id;
        dispatch({type: REGISTER_SUCCESS, payload: data});
        props.navigation.navigate('Drawer');
      }
    }

    // console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
  } catch (e) {
    console.log(e);
    dispatch({type: REGISTER_FAIL, payload: e.message});
    LoginManager.logOut();
  }
};

export const _googleAuth = (props) => async (dispatch) => {
  dispatch({type: LOADING});
  try {
    // add any configuration settings here:
    await GoogleSignin.hasPlayServices();
    GoogleSignin.configure({
      webClientId:
        '643701607432-o185ai8v9k32k7ohsjdf3bfqikbge4j6.apps.googleusercontent.com',
      // offlineAccess: false,
      // clientId:
      //   '571550519970-4qud6asm01brngbnth08lcbl4vv6ap7v.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    const data = await GoogleSignin.signIn();
    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(
      data.idToken,
      data.accessToken,
    );

    // login with credential
    const firebaseUserCredential = await firebase
      .auth()
      .signInWithCredential(credential);

    const isUser = await firestore().collection('users').get();

    for (const doc of isUser.docs) {
      if (doc.data().email === firebaseUserCredential.user.email) {
        const data = doc.data();
        data.key = doc.id;
        return dispatch({type: REGISTER_SUCCESS, payload: data});
      }
    }

    await firestore().collection('users').add({
      profile: firebaseUserCredential.user.photoURL,
      name: firebaseUserCredential.user.displayName,
      email: firebaseUserCredential.user.email,
      user: firebaseUserCredential.user.uid,
    });
    const user = await firestore().collection('users').get();

    for (const doc of user.docs) {
      if (firebaseUserCredential.user.uid === doc.data().user) {
        const data = doc.data();
        data.key = doc.id;
        dispatch({type: REGISTER_SUCCESS, payload: data});
        props.navigation.navigate('Drawer');
      }
    }

    //console.log(JSON.stringify(firebaseUserCredential.user.toJSON()));
  } catch (e) {
    console.log(e.message);
    dispatch({type: REGISTER_FAIL, payload: e.message});
    LoginManager.logOut();
  }
};

export const forgetPassword = (email) => async (dispatch) => {
  dispatch({type: LOADING});

  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(function () {
      // Email sent.
      dispatch({type: PASSWORD_RESET_SUCCESS});
    })
    .catch(function (error) {
      // An error happened.
      console.log(err.message);
      dispatch({type: PASSWORD_RESET_FAIL});
    });
};

export const logoutUser = () => async (dispatch) => {
  await firebase.auth().signOut();
  LoginManager.logOut();
  GoogleSignin.signOut();
  dispatch({type: LOGOUT});
};

export const clearAll = () => (dispatch) => {
  dispatch({type: CLEAR_ALL});
};

export const getCurrentLocation = () => async (dispatch) => {};
