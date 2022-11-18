// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA8K9cL5AAbHf_BAY9OGSIXyrDCDwCQDh4",
  authDomain: "webfirebaseconvue.firebaseapp.com",
  projectId: "webfirebaseconvue",
  storageBucket: "webfirebaseconvue.appspot.com",
  messagingSenderId: "1054133300838",
  appId: "1:1054133300838:web:d210ffe7d2e260e29147a7",
  measurementId: "G-15Q99P1PE6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

const colection = db.colleection("usuarios");

// VUE
new Vue({
  el: "#app",
  data: {
    nombre: null,
    edad: null,
    usuarios: [],
  },
  mounted() {
    this.usuarios = [];
    colection
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.usuario.push({ id: item.id, data: item.data() })
        )
      );
  },
});
