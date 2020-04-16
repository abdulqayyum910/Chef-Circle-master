import firebase from 'firebase';

//Register a user
export const registerUsers = async (user, data) => {
  const res = await firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password);
  console.log(res.data);
};

//Login a user
export const login = async (user) => {
  const res = await firebase
    .auth()
    .signInWithEmailAndPassword('abduqayyum123@gmail.com', 'qwerty');
  return res;
  //console.log(res.data);
};
