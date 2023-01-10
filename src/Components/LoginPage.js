import React, { useState,  } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';
import '../css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const { emailPass } = useContext(AuthContext);



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailPass.email === email && emailPass.password === password) {
      setIsAuthenticated(true);
      alert(`Welcome back, ${email}!`);
      navigate("/AddNote");
    } else {
      alert("Email or password is incorrect");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <br />
        <button  type="submit">Login</button>
        <button onClick={() => navigate("/register")}>Press to Register</button>
      </form>
    </div>
  );
};

export default Login;
