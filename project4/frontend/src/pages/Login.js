import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { loginUser } from '../helpers/api'
import { getToken } from '../helpers/auth'

const Login = ({ loggedIn, setLoggedIn }) => {
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
  }

  return (
    <>
      <h1>Log in</h1>
      <div>
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
          <button type='button' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
