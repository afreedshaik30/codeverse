import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional: for JS components like modal, dropdown

import { AuthProvider } from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
