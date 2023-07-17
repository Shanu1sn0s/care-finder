import { useEffect } from 'react';
import '../Styles/SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleButton } from 'react-google-button';
import { UserAuth, AuthContextProvider } from '../context/AuthContext';

function SignIn() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  },[navigate,user]);

  return (
    <>
      <AuthContextProvider>
        <div className="signin-container">
          <h1>Sign In</h1>
          <form className="signin-form">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Sign In</button>
          </form>
          <div className="google-auth">
            <p>Or :</p>
            <div className="google__btn">
              <GoogleButton onClick={handleGoogleSignIn} />
            </div>
          </div>
          <p className="signup-link">
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </p>
        </div>
      </AuthContextProvider>
    </>
  );
}

export default SignIn;
