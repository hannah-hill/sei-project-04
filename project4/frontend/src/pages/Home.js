import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ campaigns }) => {
  return (
    <>
      <div className='hero'></div>
      <div>
        {campaigns.map((campaign) => (
          <Link to={`/campaigns/${campaign.id}`} key={campaign.id}>
            <p key={campaign.id}>{campaign.title}</p>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Home
