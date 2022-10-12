import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export const LoginPage = () => {
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
            <input type="text" className="inputClass" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" className="inputClass" />
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
