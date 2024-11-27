import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function signInHandler() {
    if (email == 'raja@gmail.com' && password == 'raja123') {
      setMessage('Successfully Loggedin!');
    } else {
      setMessage('Invalid Credentials!');
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <input
        type='text'
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signInHandler}>Signin</button>

      {message}
    </div>
  );
}

export default Login;
