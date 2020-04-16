import {StyleSheet} from 'react-native';
import {screenWidth} from '../../constants/screen';

export default StyleSheet.create({
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 150,
    height: 150,
    marginTop: 50,
  },
  itemsContainer: {
    marginTop: 30,
  },
  formItems: {
    width: screenWidth / 1.5,
    marginBottom: 30,
  },
  formIcons: {
    fontSize: 30,
  },
  formLabels: {
    textAlign: 'center',
  },
  loginButton: {
    borderRadius: 30,
    width: screenWidth / 1.3,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 15,
  },
  forgetPassword: {
    fontSize: 15,
    marginTop: 15,
  },
  bottomTextContainer: {
    marginTop: 40,
    flexDirection: 'row',
  },
  signupBold: {
    fontWeight: 'bold',
  },
});
