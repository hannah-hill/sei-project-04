import React, { useState } from 'react'
import { loginUser } from '../helpers/api'

const Login = () => {
  const [login, setLogin] = useState({})

  const handleChange = ({ target }) => {
    const { name, value } = target
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  console.log(login)

  const handleSubmit = () => loginUser(login)

  return (
    <>
      <h1>Log in</h1>
      <div>
        <form onSubmit={handleSubmit}>
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
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login
