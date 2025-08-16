// public/js/auth.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Replace these with your sandbox project’s actual values
const firebaseConfig = {
  apiKey:            "AIzaSyDydxfVtcQrioLuQQIZ9B5QL0Xwot4qthA",
  authDomain:        "sandbox-56be2.firebaseapp.com",
  projectId:         "sandbox-56be2",
  storageBucket:     "sandbox-56be2.firebasestorage.app",
  messagingSenderId: "812420013406",
  appId:             "1:812420013406:web:cbfa482bfb53e7ff3f43cf"
};

// Initialize Firebase app & auth
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toggle UI based on auth state
onAuthStateChanged(auth, (user) => {
  const loginBox  = document.getElementById("loginBox");
  const logoutNav = document.getElementById("logoutNav");

  if (user && user.emailVerified !== false) {
    if (loginBox)  loginBox.style.display  = "none";
    if (logoutNav) logoutNav.style.display = "inline-block";
  } else {
    if (loginBox)  loginBox.style.display  = "block";
    if (logoutNav) logoutNav.style.display = "none";
  }
});
