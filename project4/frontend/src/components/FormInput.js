import React from 'react'

const FormInput = ({
  displayAs,
  name,
  type,
  placeholder,
  data,
  handleChange,
}) => {
  return (
    <div className='field'>
      <label htmlFor={name}>{displayAs}</label>
      <input
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        value={data[name]}
        onChange={handleChange}
      />
    </div>
  )
}

export default FormInput
