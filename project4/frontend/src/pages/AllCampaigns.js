import React, { useState, useEffect } from 'react'
import { fetchCampaigns } from '../helpers/api'
import CampaignCard from '../components/CampaignCard'

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    fetchCampaigns().then(setCampaigns)
  }, [])

  return (
    <>
      <h1>Explore campaigns...</h1>
      {campaigns.length && (
        <>
          <div className='all-campaigns-container'>
            {campaigns.map((campaign) => {
              return (
                <div key={campaign.id} className='single-campaign'>
                  <CampaignCard {...campaign} />
                </div>
              )
            })}
          </div>
        </>
      )}
      <div></div>
    </>
  )
}

export default AllCampaigns
