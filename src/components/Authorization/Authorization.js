import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Authorization.scss";
import { useAuthorization } from "../../context/AuthorizationContext/AuthorizationContext";

function Authorization({ isOpen }) {
  const {
      guest,
      loggedUser,
      closeAuthorization,
      verifyUserCredentials,
      signIn,
      signOut,
  } = useAuthorization();
  const [isShaking, setIsShaking] = useState(false);

  if (!isOpen) {
      return null;
  }

  if (loggedUser !== guest || "") {
    console.log("Now this user try to loguot: ", loggedUser);
      return (
          <>
              <div className="background-overlay" onClick={closeAuthorization}></div>
              <div className="modal-auth">
                  <h2>Welcome, {loggedUser}!</h2>
                  <button
                      type="button"
                      className="button full-width"
                      onClick={() => signOut(loggedUser)}
                  >
                      Log Out
                  </button>
              </div>
          </>
      );
  }

  const handleSignIn = (event) => {
      event.preventDefault();
      const email = event.target.user_login.value;
      const password = event.target.user_pw.value;

      const isValidUser = verifyUserCredentials(email, password);

      if (isValidUser) {
          signIn(email);
          closeAuthorization();
      } else {
          setIsShaking(true);
          setTimeout(() => setIsShaking(false), 500);
      }
  };

  return (
      <>
          <div className="background-overlay" onClick={closeAuthorization}></div>
          <form
              className={`modal-auth ${isShaking ? "shake" : ""}`}
              method="post"
              onSubmit={handleSignIn}
          >
              <span className="close" onClick={closeAuthorization}>
                  &times;
              </span>
              <div className="form-auth">
                  <h2>Login to personal account</h2>
                  <div className="input-row">
                      <input
                          id="login"
                          type="text"
                          name="user_login"
                          placeholder="E-mail"
                          defaultValue=""
                          className="profile-form-input"
                          autoComplete="current-password"
                          required
                      />
                      <label htmlFor="login" className="label">
                          E-mail
                      </label>
                      <span className="bar"></span>
                  </div>
                  <div className="input-row">
                      <input
                          id="pw"
                          type="password"
                          name="user_pw"
                          placeholder="Password"
                          defaultValue=""
                          className="profile-form-input"
                          required
                      />
                      <label htmlFor="pw" className="label">
                          Password
                      </label>
                      <span className="bar"></span>
                  </div>
                  <div className="forgot-pass-link">Forgot the password?</div>
                  <div className="input-row">
                      <button type="submit" className="button full-width">
                          Sign In
                      </button>
                  </div>
                  <div className="input-row links">
                      <Link
                          to="/register-form"
                          className="auth-link"
                          onClick={closeAuthorization}
                      >
                          Sign Up
                      </Link>
                  </div>
              </div>
          </form>
      </>
  );
}


export default Authorization;
