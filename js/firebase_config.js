
function initFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyBR0P3vMDxXDNHsI3qqpHSXL2oXKEaLK_s",
    authDomain: "love-calculator-cc8e1.firebaseapp.com",
    projectId: "love-calculator-cc8e1",
    databaseURL: "https://love-calculator-cc8e1-default-rtdb.firebaseio.com",
    storageBucket: "love-calculator-cc8e1.appspot.com",
    messagingSenderId: "899733443226",
    appId: "1:899733443226:web:f19a3ee40e2c627f420523",
    measurementId: "G-8Y4W0S2WW1"
  };
  firebase.initializeApp(firebaseConfig);
}

function initFirebaseStorage() {

  const firebaseConfig = {
    apiKey: "AIzaSyBR0P3vMDxXDNHsI3qqpHSXL2oXKEaLK_s",
    authDomain: "love-calculator-cc8e1.firebaseapp.com",
    projectId: "love-calculator-cc8e1",
    databaseURL: "https://love-calculator-cc8e1-default-rtdb.firebaseio.com",
    storageBucket: "love-calculator-cc8e1.appspot.com",
    messagingSenderId: "899733443226",
    appId: "1:899733443226:web:f19a3ee40e2c627f420523",
    measurementId: "G-8Y4W0S2WW1"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const storage = getStorage(firebaseApp);
  return storage;
}


