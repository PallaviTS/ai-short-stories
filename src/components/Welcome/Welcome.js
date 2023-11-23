import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import App from "../../App";

const Welcome = () => {
  return (
    <>
      <SignedIn>
        <App />
      </SignedIn>
      <SignedOut>
        <Link class="bg-slate-400 px-2 py-1 rounded-full" to="/sign-in">
          Sign In
        </Link>
      </SignedOut>
    </>
  );
};

export default Welcome;
