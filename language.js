
const translations = {
  de: {
    "auth.title": "Anmeldung / Registrierung",
    "auth.email": "E-Mail",
    "auth.password": "Passwort",
    "auth.newpassword": "Neues Passwort",
    "auth.register": "Registrieren",
    "auth.login": "Anmelden",
    "auth.logout": "Abmelden",
    "auth.changepassword": "Passwort ändern",
    "auth.delete": "Konto löschen"
  },
  en: {
    "auth.title": "Login / Register",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.newpassword": "New Password",
    "auth.register": "Register",
    "auth.login": "Login",
    "auth.logout": "Logout",
    "auth.changepassword": "Change Password",
    "auth.delete": "Delete Account"
  },
  at: {
    "auth.title": "Einloggn / Mitmacha",
    "auth.email": "E-Mail",
    "auth.password": "Kennwort",
    "auth.newpassword": "Neis Passwort",
    "auth.register": "Mitmacha",
    "auth.login": "Einloggn",
    "auth.logout": "Ausloggn",
    "auth.changepassword": "Passwort ändern",
    "auth.delete": "Konto loswerdn"
  }
};

function setLanguage(lang) {
  localStorage.setItem("ehe_language", lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const t = translations[lang] || translations["de"];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.innerText = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.placeholder = t[key];
  });
  const selector = document.getElementById("languageSelector");
  if (selector) selector.value = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("ehe_language") || "de";
  applyLanguage(savedLang);
});
