
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
  updatePassword,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKdPkM_Kmnvre1MhQ8HgpHTf5RSv6qCkE",
  authDomain: "ehe-community-web.firebaseapp.com",
  projectId: "ehe-community-web",
  storageBucket: "ehe-community-web.firebasestorage.app",
  messagingSenderId: "248875888624",
  appId: "1:248875888624:web:e3ebe564b0c1d306f37735"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

setPersistence(auth, browserLocalPersistence).catch(console.error);

document.getElementById("login-submit")?.addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      showNotification("Anmeldung erfolgreich!", "success");
      document.querySelector(".login-overlay").style.display = "none";
    })
    .catch((err) => showNotification("Ungültige Anmeldedaten", "error"));
});

document.getElementById("register-submit")?.addEventListener("click", () => {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      showNotification("Registrierung erfolgreich!", "success");
      document.querySelector(".register-overlay").style.display = "none";
    })
    .catch((err) => showNotification("Fehler bei Registrierung: " + err.message, "error"));
});

document.getElementById("logout-btn")?.addEventListener("click", () => {
  signOut(auth).then(() => {
    showNotification("Erfolgreich abgemeldet!", "success");
  });
});
