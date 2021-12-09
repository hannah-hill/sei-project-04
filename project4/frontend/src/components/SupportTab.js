import React, { useState } from 'react'
import { pledgeToCampaign } from '../helpers/api'

const SupportTab = ({ rewards, id }) => {
  console.log(rewards)
  const [data, setData] = useState({})

  const handleChange = ({ target }) => {
    const { name, value } = target
    setData({
      ...data,
      [name]: value,
    })
  }
  console.log(data.value)

  const handleRewardClick = async (n) => {
    setData({ value: n })
    handleSubmit()
  }

  const handleSubmit = () => {
    console.log(data)
    pledgeToCampaign(data, id)
  }

  return (
    <>
      <div className='tab-container'>
        <div className='reward-container'>
          <h4>Make a pledge with no reward</h4>
          <p>Pledge any amount and support this campaign for no reward.</p>
          <input
            type='number'
            name='value'
            value={data.value || ''}
            onChange={handleChange}
          ></input>
          <button onClick={handleSubmit}>Continue</button>
        </div>
        {rewards.map((reward) => {
          return (
            <div key={reward.id} className='reward-container'>
              <h4>{reward.title}</h4>
              <p>{reward.description}</p>
              <p>
                <span>£{reward.value}</span>
              </p>
              <button onClick={() => handleRewardClick(reward.value)}>
                Continue
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SupportTab
