import React from 'react'

const FormDropdown = ({ displayAs, name, data, handleChange, options }) => {
  return (
    <div className='field'>
      <label htmlFor={name}>{displayAs}</label>
      <select id={name} name={name} value={data[name]} onChange={handleChange}>
        {options.map((choice) => (
          <option key={choice} value={choice}>
            {choice}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FormDropdown
