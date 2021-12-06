import React, { useState } from 'react'
import { registerUser } from '../helpers/api'

const Signup = () => {
  const [register, setRegister] = useState({})

  const handleChange = ({ target }) => {
    const { name, value } = target
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  console.log(register)

  const handleSubmit = (event) => {
    event.preventDefault()
    registerUser(register)
  }

  return (
    <>
      <h1>Log in</h1>
      <div>
        <form>
          <input
            placeholder='first name'
            type='text'
            name='first_name'
            value={register.first_name || ''}
            onChange={handleChange}
          ></input>
          <input
            placeholder='last name'
            type='text'
            name='last_name'
            value={register.last_name || ''}
            onChange={handleChange}
          ></input>
          <input
            placeholder='username'
            type='text'
            name='username'
            value={register.username || ''}
            onChange={handleChange}
          ></input>
          <input
            placeholder='email'
            type='email'
            name='email'
            value={register.email || ''}
            onChange={handleChange}
          ></input>
          <input
            placeholder='password'
            type='password'
            name='password'
            value={register.password || ''}
            onChange={handleChange}
          ></input>
          <input
            placeholder='confirm password'
            type='password'
            name='password_confirmation'
            value={register.password_confirmation || ''}
            onChange={handleChange}
          ></input>
          <button type='button' onClick={handleSubmit}>
            Sign up
          </button>
        </form>
      </div>
    </>
  )
}

export default Signup
