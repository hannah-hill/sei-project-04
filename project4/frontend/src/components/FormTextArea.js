import React from 'react'

const FormTextArea = ({
  displayAs,
  name,
  placeholder,
  data,
  handleChange,
  maxlength,
}) => {
  return (
    <div className='field'>
      <label htmlFor={name}>{displayAs}</label>
      <textarea
        placeholder={placeholder}
        id={name}
        name={name}
        value={data[name]}
        onChange={handleChange}
        maxLength={maxlength}
      />
    </div>
  )
}
export default FormTextArea
