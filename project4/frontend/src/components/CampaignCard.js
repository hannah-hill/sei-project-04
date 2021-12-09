import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CampaignCard = (props) => {
  const [daysLeft, setDaysLeft] = useState(60)
  const [percentageFunded, setPercentageFunded] = useState(0)

  useEffect(() => {
    const createdOn = new Date(props.created_on)
    countdown(createdOn, props.duration)
    setPercentageFunded(
      ((props.funding.value__sum / props.target) * 100).toFixed(0)
    )
  }, [props])

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
      <div className='card-img'>
        <img src={props.header_img} />
      </div>
      <div className='card-title'>
        <Link to={`/campaigns/${props.id}`} key={props.id}>
          <h4>{props.title}</h4>
        </Link>
        <p>{props.byline}</p>
      </div>
      <div className='card-details'>
        <div className='card-funding'>
          {props.funding.value__sum ? (
            <p>£{props.funding.value__sum} pledged</p>
          ) : (
            <p>No pledges yet</p>
          )}
          <p>{percentageFunded}% funded</p>
        </div>
        <div className='card-time'>
          <p>{daysLeft} days left</p>
        </div>
      </div>
    </>
  )
}

export default CampaignCard
