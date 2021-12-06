import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Header = ({ loggedIn, handleLogout }) => {
  return (
    <>
      <header>
        <div className='header-container'>
          <div className='header-left'>
            <div className='hamburger-container'>
              <Nav />
            </div>
          </div>
          <div className='header-centre'>
            <h1>Seedling</h1>
          </div>
          <div className='header-right'>
            {loggedIn ? (
              <>
                <button onClick={handleLogout}>LOGOUT</button>
                <button>ACCOUNT</button>
              </>
            ) : (
              <>
                <Link to='/login'>
                  <button>LOGIN</button>
                </Link>
                <Link to='/signup'>
                  <button>SIGN UP</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header