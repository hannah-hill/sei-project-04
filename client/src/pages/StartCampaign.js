import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import CampaignForm from '../components/CampaignForm'
import RewardsForm from '../components/RewardsForm'
import { createCampaign } from '../helpers/api'
import Login from '../components/Login'

const StartCampaign = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [data, setData] = useState({
    title: '',
    byline: '',
    category: '',
    location: '',
    header_img: 'https://i.imgur.com/ZIJDpeq.jpg',
    target: '',
    duration: '',
    description: '',
  })
  const [id, setId] = useState(0)
  useEffect(() => {
    loggedIn && setStep(1)
  }, [loggedIn])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!step) {
      setStep(1)
    } else if (step === 1) {
      await createCampaign(data).then(setId)
      setStep(2)
    } else if (step === 2) {
      navigate('/campaigns/')
    }
  }

  const handleChange = ({ target }) => {
    const { name, value } = target
    setData({
      ...data,
      [name]: value,
    })
  }

  const formProps = { data, handleChange, handleSubmit }

  return (
    <>
      <section className='start-form'>
        <h2>Start a crowd campaign</h2>
        <ul className='start-breadcrumb'>
          <li onClick={() => setStep(0)}>
            <span>
              <strong>Step 1</strong>: log in or sign up
            </span>
          </li>
          <li onClick={() => setStep(1)}>
            <span>
              <strong>Step 2</strong>: create your campaign
            </span>
          </li>
          <li onClick={() => setStep(2)}>
            <span>
              <strong>Step 3</strong>: create rewards for pledges
            </span>
          </li>
        </ul>
        {step ? (
          step === 1 ? (
            <CampaignForm formProps={formProps} />
          ) : (
            <RewardsForm setStep={setStep} id={id} />
          )
        ) : loggedIn ? (
          <>
            <p>
              You&apos;re already signed in! Click on Step 2 above to get
              started on your campaign.
            </p>
          </>
        ) : (
          <>
            <Login
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setStep={setStep}
            />
          </>
        )}
      </section>
    </>
  )
}

export default StartCampaign
