import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import HomePage from '../pages/HomePage';

export const Protected = () => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/sign-in" />;
  }
  return <HomePage />;
};
