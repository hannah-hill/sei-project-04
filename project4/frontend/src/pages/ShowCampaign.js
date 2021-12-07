import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchCampaign } from '../helpers/api'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const ShowCampaign = () => {
  const [data, setData] = useState({})
  const [daysLeft, setDaysLeft] = useState(60)
  const { id } = useParams()

  useEffect(() => {
    fetchCampaign(id).then(setData)
  }, [id])

  useEffect(() => {
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

  return (
    <>
      <div className='show-header'>
        <h2>{data.title}</h2>
        <h3>{data.description}</h3>
      </div>
      <section className='show-details'>
        <div className='img-container'>
          <img src={data.header_img} className='main-img' />
        </div>
        <div className='status-container'>
          <ProgressBar animated now={450} max={data.target} variant='info' />
          <p>£450 of £{data.target} pledged</p>
          {/* {data.supporters.length ? (
            <p>{data.supporters.length} supporters</p>
          ) : (
            <p>No supporters yet - be the first!</p>
          )} */}
          <p>{daysLeft} days left</p>
          <button>make a pledge</button>
          <p>{data.category}</p>
          <p>{data.location}</p>
        </div>
      </section>
      <section className='campaign-tabs'>
        <Tabs
          defaultActiveKey='profile'
          id='uncontrolled-tab-example'
          className='mb-3'
        >
          <Tab eventKey='home' title='Description'></Tab>
          <Tab eventKey='profile' title='Support'></Tab>
          <Tab eventKey='contact' title='Q&A'></Tab>
        </Tabs>
      </section>
    </>
  )
}

export default ShowCampaign
