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
        setStep(0)
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-container login'>
          <h3>Log in</h3>
          <div className='field'>
            <label htmlFor='email'>Email</label>
            <input
              placeholder='email'
              type='email'
              name='email'
              value={login.email || ''}
              onChange={handleChange}
            ></input>
          </div>
          <div className='field'>
            <label htmlFor='password'>Password</label>
            <input
              placeholder='password'
              type='password'
              name='password'
              value={login.password || ''}
              onChange={handleChange}
            ></input>
          </div>
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
