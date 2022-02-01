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

  const handleSubmit = (event) => {
    event.preventDefault()
    registerUser(register)
  }

  return (
    <>
      <div className='signup-section'>
        <form>
          <div className='form-container'>
            <h3>Sign up</h3>
            <div className='field'>
              <label htmlFor='first_name'>First name</label>
              <input
                placeholder='first name'
                type='text'
                name='first_name'
                value={register.first_name || ''}
                onChange={handleChange}
              ></input>
            </div>
            <div className='field'>
              <label htmlFor='last_name'>Last name</label>
              <input
                placeholder='last name'
                type='text'
                name='last_name'
                value={register.last_name || ''}
                onChange={handleChange}
              ></input>
            </div>
            <div className='field'>
              <label htmlFor='username'>Username</label>
              <input
                placeholder='username'
                type='text'
                name='username'
                value={register.username || ''}
                onChange={handleChange}
              ></input>
            </div>
            <div className='field'>
              <label htmlFor='email'>Email</label>
              <input
                placeholder='email'
                type='email'
                name='email'
                value={register.email || ''}
                onChange={handleChange}
              ></input>
            </div>
            <div className='field'>
              <label htmlFor='password'>Password</label>
              <input
                placeholder='password'
                type='password'
                name='password'
                value={register.password || ''}
                onChange={handleChange}
              ></input>
            </div>
            <div className='field'>
              <label htmlFor='password_confirmation'>Confirm password</label>
              <input
                placeholder='confirm password'
                type='password'
                name='password_confirmation'
                value={register.password_confirmation || ''}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className='start-submit'>
            <button type='button' onClick={handleSubmit}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup
