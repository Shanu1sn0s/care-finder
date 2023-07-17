import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Nav from './compoments/Nav';
// import Footer from './compoments/Footer';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import { AuthContextProvider } from './context/AuthContext';
import { Protected } from './compoments/Protected';

function App() {
  return (
    <>
    {/* <UserProvider> */}
    {/* <UserProvider value ={{user, setUser ,unsetUser}}></UserProvider> */}
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Protected>
                <HomePage />
              </Protected>
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/sign-in" element={<SignIn />} />
        </Routes>
        {/* <Footer/> */}
      </AuthContextProvider>
      {/* </UserProvider> */}
      </>
  );
}

export default App;
