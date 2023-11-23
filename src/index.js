import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Welcome from "./components/Welcome/Welcome";
import SignInPage from "./components/SignIn/SignIn";
import UserProfilePage from "./components/UserProfile/UserProfile";

import reportWebVitals from "./reportWebVitals";
import {
  ClerkProvider,
  SignedIn,
  SignedOut
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById("root"));

const ClerkProviderWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerk_pub_key}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route
          path="/"
          element={<Welcome />}
        />
        <Route
          path="/sign-in/*"
          element={<SignInPage routing="path" path="/sign-in" />}
        />
        <Route
          path="/user-profile*"
          element={<UserProfilePage routing="path" path="/user-profile" />}
        />
        <Route
          path="/stories"
          element={
            <>
              <SignedIn>
                <App />
              </SignedIn>
              <SignedOut>
                <Welcome />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
