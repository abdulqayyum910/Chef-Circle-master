import {
  LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_ALL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  UPDATE_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_SUCCESS,
} from '../actions/types';

const initialState = {
  loading: false,
  user: null,
  message: '',
  errors: null,
  success: false,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload,
        message: 'Login Success',
        success: true,
      };
    }
    case LOGIN_FAIL: {
      return {
        loading: false,
        user: null,
        message: 'Invalid Credentials',
        success: false,
      };
    }

    case REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload,
        message: 'Successfully registered ',
        success: true,
      };
    }
    case REGISTER_FAIL: {
      return {
        loading: false,
        user: null,
        message: action.payload,
        success: false,
      };
    }

    case PASSWORD_RESET_SUCCESS: {
      return {
        ...state,
        loading: false,
        message: 'Email sent seccessfully',
        success: true,
      };
    }

    case PASSWORD_RESET_FAIL: {
      return {
        ...state,
        loading: false,
        message: 'An error occurred while sending email',
        success: false,
      };
    }

    case UPDATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        message: 'Updated',
        success: true,
      };
    }
    case LOGOUT: {
      return {
        loading: false,
        user: null,
        message: '',
        success: false,
      };
    }

    case CLEAR_ALL: {
      return {
        ...state,
        loading: false,
        message: '',
        success: false,
      };
    }

    default:
      return state;
  }
};

export default Auth;
