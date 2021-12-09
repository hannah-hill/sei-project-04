import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'
import { loginUser } from '../helpers/api'
import { getToken } from '../helpers/auth'
import { Link } from 'react-router-dom'

const LoginModal = ({ show, handleClose, loggedIn, setLoggedIn }) => {
  const [login, setLogin] = useState({})
  const navigate = useNavigate()

  const handleChange = ({ target }) => {
    const { name, value } = target
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  console.log(login)

  const handleSubmit = (event) => {
    event.preventDefault
    !loggedIn && loginUser(login)
    getToken() ? setLoggedIn(true) : setLoggedIn(false)
    navigate('/')
    handleClose(true)
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='login-modal'>
            <form>
              <input
                placeholder='email'
                type='email'
                name='email'
                value={login.email || ''}
                onChange={handleChange}
              ></input>
              <input
                placeholder='password'
                type='password'
                name='password'
                value={login.password || ''}
                onChange={handleChange}
              ></input>
              {/* <button type='button' onClick={handleSubmit}>
                Submit
              </button> */}
            </form>
            <p>
              Don&apos;t have an account? <Link to='/signup'>Sign up here</Link>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Log in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LoginModal
