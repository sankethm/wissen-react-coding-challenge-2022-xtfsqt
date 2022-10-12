import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

export const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="loginBox">
      <img
        src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH"
        width="60%"
      />
      <h3>Hello there, Sign in to continue</h3>

      <div>
        <form className="loginForm">
          <div>
            <label>Username/Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              value={loginEmail}
              className="inputClass"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              value={loginPassword}
              className="inputClass"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <FontAwesomeIcon className="seePassword" icon={faEye} />
          </div>
          <div className="agreeDiv">
            <input type="checkbox"></input>
            <p>
              By creating or logging into an account you are agreeing with our
              <b>Terms & Conditions and Privacy Policy</b>
            </p>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};
