import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import CampaignForm from '../components/CampaignForm'
import { createCampaign } from '../helpers/api'

const StartCampaign = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    title: '',
    byline: '',
    category: '',
    location: '',
    header_img: '',
    target: '',
    duration: '',
    description: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createCampaign(data)
    navigate('/campaigns')
  }

  const handleChange = ({ target }) => {
    const { name, value } = target
    setData({
      ...data,
      [name]: value,
    })
  }

  const formProps = { data, handleChange }

  return (
    <>
      <section className='start-form'>
        <h2>Start a crowd campaign</h2>
        <ul className='start-breadcrumb'>
          <li>
            <span>
              <strong>Step 1</strong>
            </span>
          </li>
          <li>
            <span>
              <strong>Step 2</strong>
            </span>
          </li>
          <li>
            <span>
              <strong>Step 3</strong>
            </span>
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          <div className='form-container'>
            <CampaignForm formProps={formProps} />
          </div>
          <div className='start-submit'>
            <input type='submit' value='START CAMPAIGN' />
          </div>
        </form>
      </section>
    </>
  )
}

export default StartCampaign
