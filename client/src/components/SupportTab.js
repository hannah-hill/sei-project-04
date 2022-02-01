import React, { useState } from 'react'
import { pledgeToCampaign } from '../helpers/api'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const SupportTab = ({ rewards, id }) => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [data, setData] = useState({})

  const handleChange = ({ target }) => {
    const { name, value } = target
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleRewardClick = async (n) => {
    setData({ value: n })
    handleShow()
  }

  const handleSubmit = () => {
    console.log(data)
    handleClose()
    pledgeToCampaign(data, id)
    navigate('/campaigns')
  }

  return (
    <>
      <div className='tab-container'>
        <div className='reward-container'>
          <h4>Make a pledge, no reward</h4>
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
              <>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Body>Continue to payment</Modal.Body>
                  <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button variant='primary' onClick={handleSubmit}>
                      Continue
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SupportTab
