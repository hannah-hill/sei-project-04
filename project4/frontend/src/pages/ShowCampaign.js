import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { deleteCampaign, fetchCampaign } from '../helpers/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faShapes } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import SupportTab from '../components/SupportTab'
import StoryTab from '../components/StoryTab'

const ShowCampaign = () => {
  const [data, setData] = useState({})
  const [daysLeft, setDaysLeft] = useState(60)
  const [funding, setFunding] = useState(0)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchCampaign(id).then(setData)
  }, [id])

  useEffect(() => {
    data.funding && setFunding(data.funding.value__sum)
    const createdOn = new Date(data.created_on)
    countdown(createdOn, data.duration)
  }, [data])

  console.log('CAMPAIGN DATA -->', data)

  function countdown(date, days) {
    const today = new Date()
    const deadline = new Date(date)
    deadline.setDate(deadline.getDate() + days)
    const difference = deadline.getTime() - today.getTime()
    const final = Math.ceil(difference / (1000 * 60 * 60 * 24))
    setDaysLeft(final)
  }

  const handleDelete = async (event) => {
    event.preventDefault()
    await deleteCampaign(id).then(navigate('/campaigns/'))
  }

  const handleClick = () => {}

  return (
    <>
      <div className='show-header'>
        <h2>{data.title}</h2>
        <h3>{data.byline}</h3>
      </div>
      <section className='show-details'>
        <div className='img-container'>
          <img src={data.header_img} className='main-img' />
        </div>
        <div className='status-container'>
          <ProgressBar
            animated
            now={funding}
            max={data.target}
            variant='info'
          />
          {funding ? (
            <p>
              <span>
                <strong>£{funding}</strong>
              </span>{' '}
              of <strong>£{data.target}</strong> pledged
            </p>
          ) : (
            <p>
              <span>
                <strong>£0</strong>
              </span>{' '}
              of <strong>£{data.target}</strong> pledged
            </p>
          )}
          {data.supporters ? (
            data.supporters.length === 1 ? (
              <p>
                <span>
                  <strong>1</strong>
                </span>{' '}
                supporter
              </p>
            ) : (
              <p>
                <span>
                  <strong>{data.supporters.length}</strong>
                </span>{' '}
                supporters
              </p>
            )
          ) : (
            <p>No supporters yet - be the first!</p>
          )}
          <p>
            <span>
              <strong>{daysLeft}</strong>
            </span>{' '}
            days remaining
          </p>
          <button>support this campaign</button>
          <div className='status-footer'>
            <div className='icon-text-container'>
              <FontAwesomeIcon icon={faShapes} />
              <p>{data.category}</p>
            </div>
            <div className='icon-text-container'>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>{data.location}</p>
            </div>
          </div>
        </div>
      </section>
      <section className='campaign-tabs'>
        <Tabs
          defaultActiveKey='profile'
          id='uncontrolled-tab-example'
          className='mb-3'
        >
          <Tab eventKey='home' title='Story' default>
            <StoryTab />
          </Tab>
          <Tab eventKey='profile' title='Support'>
            {data.rewards && <SupportTab rewards={data.rewards} id={id} />}
          </Tab>
          <Tab eventKey='contact' title='Q&A' disabled></Tab>
        </Tabs>
        <div className='admin-section'>
          <button onClick={handleClick}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </section>
    </>
  )
}

export default ShowCampaign
