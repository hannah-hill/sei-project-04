import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { createReward } from '../helpers/api'
import FormInput from './FormInput'
import FormTextArea from './FormTextArea'

const RewardsForm = ({ id }) => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    title: '',
    description: '',
    value: '',
    campaign: id,
  })

  const handleChange = ({ target }) => {
    const { name, value } = target
    setData({
      ...data,
      [name]: value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    await createReward(data)
    resetData()
  }

  const resetData = () => {
    setData({ title: '', description: '', value: '', campaign: id })
  }

  const handleClick = () => {
    navigate(`/campaigns/${id}`)
    createReward(data)
  }

  const formProps = { data, handleChange, handleSubmit }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-container'>
          <FormInput
            displayAs='Reward title'
            name='title'
            type='text'
            placeholder='reward title i.e. a copy of your book, stickers, a free lesson'
            {...formProps}
          />
          <FormTextArea
            displayAs='Description'
            name='description'
            placeholder='write a short description (1-2 sentences) of your reward to attract some pledges'
            maxlength='140'
            {...formProps}
          />
          <FormInput
            displayAs='Pledge amount'
            name='value'
            type='number'
            placeholder='set an amount in GBP for this reward'
            {...formProps}
          />
          <div className='start-submit'>
            <input type='submit' value='save and add another' />
          </div>
        </div>
        <div className='start-submit'>
          <button onClick={handleClick}>SAVE AND VIEW CAMPAIGN</button>
        </div>
      </form>
    </div>
  )
}

export default RewardsForm
