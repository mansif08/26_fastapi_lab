/*import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., login authentication)
    console.log('Login form submitted');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
*/
/*
import React, { useState } from 'react';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., login authentication)
    console.log('Login form submitted');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <UsernameInput value={username} onChange={setUsername} />
        <PasswordInput value={password} onChange={setPassword} />
        <SubmitButton />
      </form>
    </div>
  );
};

export default LoginForm;

*/

/*
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the entered credentials are correct
    if (username === 'user' && password === 'password') {
      setLoginSuccess(true);
    } else {
      alert('Invalid username or password');
    }
  };

  if (loginSuccess) {
    return <Navigate to="/success" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <UsernameInput value={username} onChange={setUsername} />
        <PasswordInput value={password} onChange={setPassword} />
        <SubmitButton />
      </form>
    </div>
  );
};

export default LoginForm;
*/
/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the entered credentials are correct
    if (username === 'user' && password === 'password') {
      setLoginSuccess(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <UsernameInput value={username} onChange={setUsername} />
        <PasswordInput value={password} onChange={setPassword} />
        <SubmitButton />
      </form>
      {loginSuccess && <p>Login Successful</p>}
      {loginSuccess && <Link to="/success">Continue</Link>}
    </div>
  );
};

export default LoginForm;
*/
/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the entered credentials are correct
    if (username === 'user' && password === 'password') {
      setLoginSuccess(true);
      navigate('/success'); // Navigate to "/success" upon successful login
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <UsernameInput value={username} onChange={setUsername} />
        <PasswordInput value={password} onChange={setPassword} />
        <SubmitButton />
      </form>
      {loginSuccess && <p>Login Successful</p>}
    </div>
  );
};

export default LoginForm;
*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the entered credentials are correct
    if (username === 'user' && password === 'password') {
      setLoginSuccess(true);
      navigate('/success'); // Navigate to "/success" upon successful login
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <UsernameInput value={username} onChange={setUsername} />
        <PasswordInput value={password} onChange={setPassword} />
        <SubmitButton />
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {loginSuccess && <p>Login Successful</p>}
    </div>
  );
};

export default LoginForm;




/*

import React, { useState } from 'react';
import './app1.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import NewPage from './NewPage';

const Home = () => {
  return null; // Render nothing for the home page
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simulate login logic (e.g., check credentials)
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
      return true; // Return true to indicate successful login
    } else {
      alert('Invalid username or password');
      return false; // Return false to indicate unsuccessful login
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/NewPage" /> : <LoginPage handleLogin={handleLogin} />
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/NewPage" element={<NewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
*/
/*
import { useHistory } from 'react-router-dom'; // Import useHistory

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const history = useHistory(); // Initialize useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the entered credentials are correct
    if (username === 'user' && password === 'password') {
      setLoginSuccess(true);
      history.push('/success'); // Navigate to "/success" upon successful login
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <UsernameInput value={username} onChange={setUsername} />
        <PasswordInput value={password} onChange={setPassword} />
        <SubmitButton />
      </form>
      {loginSuccess && <p>Login Successful</p>}
    </div>
  );
};

export default LoginForm;
*/
