import { SignIn } from "@clerk/clerk-react";
 
const SignInPage = () => (
  <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" redirectUrl="/stories"/>
);
 
export default SignInPage;