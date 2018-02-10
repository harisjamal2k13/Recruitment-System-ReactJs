import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAYxqXmZTGUI7K2zs2tyyEPcSMw_3shid4",
    authDomain: "campus-recruitment-syste-f9c31.firebaseapp.com",
    databaseURL: "https://campus-recruitment-syste-f9c31.firebaseio.com",
    projectId: "campus-recruitment-syste-f9c31",
    storageBucket: "campus-recruitment-syste-f9c31.appspot.com",
    messagingSenderId: "470931644625"
  };
 var index = firebase.initializeApp(config);
 

ReactDOM.render( <App />,  document.getElementById('root'));
