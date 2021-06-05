import React, {useState, useReducer, useEffect, useContext, createContext} from 'react';
import { AuthContext } from './auth.context';
import queryString from 'query-string';
import firebase from "firebase/app";
import 'firebase/auth';
import prod from '../../../.firebase/prod.json';
import dev from '../../../.firebase/dev.json';

const isBrowser = typeof window !== 'undefined';
const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem('access_token'),
  currentForm: 'signIn',
};

if (!firebase.apps.length) {
  firebase.initializeApp(dev);
}

function reducer(state: any, action: any) {
  console.log(state, 'auth');

  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        currentForm: 'signIn',
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isAuthenticated: false,
      };
    case 'SIGNUP':
      return {
        ...state,
        currentForm: 'signUp',
      };
    case 'FORGOTPASS':
      return {
        ...state,
        currentForm: 'forgotPass',
      };
    default:
      return state;
  }
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const auth = useProvideAuth();
  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <AuthContext.Provider value={{ auth, authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};


function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password) => {
      return firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((response) => {
              setUser(response.user);
              return response.user;
          });
  };

  const signup = (email, password) => {
      return firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((response) => {
              setUser(response.user);
              return response.user;
          });
  };

  const signout = () => {
      return firebase
          .auth()
          .signOut()
          .then(() => {
              setUser(false);
          });
  };

  const sendPasswordResetEmail = (email) => {
      return firebase
          .auth()
          .sendPasswordResetEmail(email)
          .then(() => {
              return true;
          });
  };

  const confirmPasswordReset = (password, code) => {
      const resetCode = code || getFromQueryString('oobCode');

      return firebase
          .auth()
          .confirmPasswordReset(resetCode, password)
          .then(() => {
              return true;
          });
  };

  useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              setUser(user);
          } else {
              setUser(false);
          }
      });

      return () => unsubscribe();
  }, []);

  return {
      userId: user && user.uid,
      signin,
      signup,
      signout,
      sendPasswordResetEmail,
      confirmPasswordReset
  };
}

const getFromQueryString = (key) => {
  return queryString.parse(window.location.search)[key];
};
