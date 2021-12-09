import React, { useState } from 'react'
import { loginUser } from '../helpers/api'
import { getToken } from '../helpers/auth'

const Login = ({ loggedIn, setLoggedIn, setStep }) => {
  const [login, setLogin] = useState({})
  const [error, setError] = useState(false)

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
    if (!loggedIn) {
      try {
        loginUser(login)
        getToken() ? setLoggedIn(true) : setLoggedIn(false)
        setStep(1)
      } catch (err) {
        console.log(err)
        setError(true)
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-container'>
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
          {error && <p>Something went wrong, please try again</p>}
        </div>
        <div className='start-submit'>
          <input type='submit' value='LOGIN' />
        </div>
      </form>
    </>
  )
}

export default Login
