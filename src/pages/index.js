import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./auth/AuthContext";
import { firebaseConfig } from "./firebase-config"; // importăm configurația Firebase
import { initializeApp } from "firebase/app";
// Alte importuri necesare

// Inițializăm Firebase cu configurația
const firebaseApp = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
