import firebase from 'firebase/app';
import 'firebase/auth';

// Use actual config values from registered firbase app
var config = {
  apiKey: "AIzaSyASZJOf-AJS3tswnqXxVDq1vpIgJJyvRXs",
    authDomain: "zel-button1.firebaseapp.com",
    databaseURL: "https://zel-button1.firebaseio.com",
    projectId: "zel-button1",
    storageBucket: "",
    messagingSenderId: "145565417489",
    appId: "1:145565417489:web:ba53424a94a05440"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
