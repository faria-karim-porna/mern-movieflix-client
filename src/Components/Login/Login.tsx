import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut } from "./loginManager";
import "./Login.css";

type LocationState = {
  from: {
    pathname: string;
  };
};

interface LoginInterface {
  isSignedIn: boolean;
  name: string;
  email: string;
  password: string;
  photo: string;
  error?: string;
  success?: boolean;
}

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState<LoginInterface>({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  initializeLoginFramework();

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state ? (location.state as LocationState) : { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const signOut = () => {
    handleSignOut().then((res) => {
      handleResponse(res, false);
    });
  };

  const handleResponse = (res: LoginInterface, redirect: boolean) => {
    setUser(res);
    localStorage.setItem("name", res.name);
    localStorage.setItem("email", res.email);
    localStorage.setItem("photo", res.photo);
    if (redirect) {
      history.replace(from);
    }
  };

  return (
    <div className="login-section">
      <div className="container">
        <Link to="/" className="link">
          <div className="site-name pt-3 pb-5">
            Movie<span className="site-name-red">flix</span>
          </div>
        </Link>
        <div className="login-form">
          <form>
            <p className="form-text login-headline">Login</p>

            <div className="social-btn pt-2" onClick={googleSignIn}>
              <p className="login-text text-center">
                Continue with <span className="g1">G</span>
                <span className="o1">o</span>
                <span className="o2">o</span>
                <span className="g2">g</span>
                <span className="l">l</span>
                <span className="e">e</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
