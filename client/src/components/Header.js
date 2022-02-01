import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginModal from './LoginModal'
import Nav from './Nav'

const Header = ({ loggedIn, handleLogout, setLoggedIn }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
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
            <Link to='/'>
              <h1>crowd</h1>
            </Link>
          </div>

          <div className='header-right'>
            {loggedIn ? (
              <>
                <button onClick={handleLogout}>LOGOUT</button>
              </>
            ) : (
              <>
                <button onClick={handleShow}>LOG IN / REGISTER</button>
                <LoginModal
                  show={show}
                  handleClose={handleClose}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
                {/* <Link to='/login'>
                  <button>LOGIN</button>
                </Link> */}
              </>
            )}
            <Link to='/campaigns/new'>
              <button>START A CAMPAIGN</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
