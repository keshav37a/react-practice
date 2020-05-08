import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0JJGdGy6_PYzmXAzbUWVrGD6h4cM6hBI",
    authDomain: "cart-969b1.firebaseapp.com",
    databaseURL: "https://cart-969b1.firebaseio.com",
    projectId: "cart-969b1",
    storageBucket: "cart-969b1.appspot.com",
    messagingSenderId: "1089222445244",
    appId: "1:1089222445244:web:1b59bd6558cab2d54168b9"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


