import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Nav() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async() =>{
    try {
      await logOut();
    } catch(error){
      console.log(error)
    }
    
  }
  return (
    <div className="nav__items">
      <h1>
        <img src="" alt="" />
        <span>Care-Finder</span>
      </h1>
      <nav>
        <ul>
          <li  className="nav__links">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__links">
            <Link to="/about">About</Link>
          </li>

          {user?.displayName ? (
            <button className="sign__up" onClick={handleSignOut}>Sign out</button>
          ) : (
            <li className="nav__links btn">
              <button>
                <Link className="sign__up" to="/sign-up">
                  Sign up
                </Link>
              </button>
            </li>
          )}
      <div className='user__email'></div>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
