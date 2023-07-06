// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getAuth , createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyB8bmV-VVITG7jMD_4gJy6gnk8Z1r-cSVQ",
   authDomain: "anon-garments.firebaseapp.com",
   projectId: "anon-garments",
   storageBucket: "anon-garments.appspot.com",
   messagingSenderId: "503561279280",
   appId: "1:503561279280:web:a8ac363dcb433bcc39daf5"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
var name = document.getElementById('name')
var email = document.getElementById('email')
var password = document.getElementById('password')

window.signup = function(){
   var obj = {
      name : name.value,
      email : email.value,
      password : password.value,
   }
    createUserWithEmailAndPassword(auth,obj.email,obj.password)
    .then(function(res){
      alert("ok")
    })
    .catch(function(err){
      alert("not")
    })
}