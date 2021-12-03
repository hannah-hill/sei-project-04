import React from 'react'
import { Link } from 'react-router-dom'

const CampaignCard = (props) => {
  return (
    <>
      <div>
        <Link to={`/campaigns/${props.id}`} key={props.id}>
          <p>{props.title}</p>
        </Link>
      </div>
    </>
  )
}

export default CampaignCard
