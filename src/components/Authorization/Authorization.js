import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Authorization.scss"

function Authorization({ isOpen, closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usersData = [];

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    usersData.push(userData);
    // localStorage.setItem("userData", JSON.stringify(userData));
    setEmail("");
    setPassword("");
    closeModal();
  };

  if (!isOpen) {
    return null;
  }
  
const handleClose = (e) => {
  e.preventDefault();
  closeModal();
}

  return (
    <form className="modal-auth" method="post">
      <span className="close" onClick={handleClose}>&times;</span>
      <div className="form-auth">
        <h2>Login to personal account</h2>
        <div className="input-row">
              <input
                id="login"
                type="text"
                name="user_login"
                placeholder="E-mail"
                value={email}
                onChange={handleEmailChange}
                className="profile-form-input"
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
                value={password}
                onChange={handlePasswordChange}
                className="profile-form-input"
                required
              />
              <label htmlFor="pw" className="label">
                Password
              </label>
              <span className="bar"></span>
        </div>
        <div className="forgot-pass-link">Forgot the password?</div>
        <div className="input-row" onClick={handleSubmit}>
              <button type="submit" className="button full-width">
                Sign In
              </button>
        </div>
        <div className="input-row links">
          <Link to="/register" className="auth-link">
            Sign Up
          </Link>
        </div>
      </div>        
    </form>     
  );
}

export { Authorization };