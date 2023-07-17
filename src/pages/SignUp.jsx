import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {createUser} = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefaut();
    setError('');
    try {
      await createUser(email, password)
    } catch(e) {
        setError(e.message);
        console.log(e.message);
    }
  };
  return (
    <div className="signin-container">
      <h1>Sign up for free</h1>
      <form onSubmit={handleSubmit} className="signin-form">
        <label>Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />

        <button type="submit">Sign up</button>
      </form>
      <div className="google-auth">
        <p>Or :</p>
      </div>
      <p className="signup-link">
        Already have an account? <Link to="/sign-in">Sign in</Link>
      </p>
    </div>
  );
}

export default SignUp;
