import React, { useState } from 'react';
import '../sass/Login.scss';
import { userLogin } from '../../redux/userActions';
import { useDispatch, useSelector } from 'react-redux';


function Login() {
  const dispatch= useDispatch()
  const {loading,error}=useSelector(state=>state.user)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    userLogin(body,dispatch)
  }; 

  return (
    <div className="login">
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Username</label>
          <input
           // type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="checkbox-group">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        </div>
        {error&&<div>{error}</div>}
        <button type="submit" className={`${loading?"buttonDisabled":"button"}`} disabled={loading} >Sign In</button>
      </form>
    </div>
  );
}

export default Login;
