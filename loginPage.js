import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearError } from './actions/loginAction';
import { LoadUsers } from './loadUsers';
//import { useAlert } from 'react-alert';

export const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'same-origin',
    })
      .then((response) => response.json())
      .then((data) => {
        setIsAuthenticated(true);
        setLoading(false);
        localStorage.setItem('token', data.token);
      })
      .catch((error) => console.log(error));
    setLoading(true);
  };
  if (!loading && !isAuthenticated)
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
              <FontAwesomeIcon
                toggle="#password-field"
                className="seePassword"
                icon={faEye}
              />
            </div>
            <div className="agreeDiv">
              <input type="checkbox"></input>
              <p>
                By creating or logging into an account you are agreeing with our
                <b>Terms & Conditions and Privacy Policy</b>
              </p>
            </div>
            <button onClick={handleClick}>Login</button>
          </form>
        </div>
      </div>
    );
  if (loading) return <div>Loading</div>;
  if (isAuthenticated) return <LoadUsers />;
};
