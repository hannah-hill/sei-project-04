import React, { useState, useEffect } from 'react'
import { fetchCampaigns } from '../helpers/api'
import CampaignCard from '../components/CampaignCard'
import Filter from '../components/Filter'

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    fetchCampaigns().then(setCampaigns)
  }, [])

  const locationFilterActions = [
    { name: 'London', href: 'campaigns/' },
    { name: 'Paris', href: 'campaigns/' },
    { name: 'Manchester', href: 'campaigns/' }
  ]
  const categoryFilterActions = [
    { name: 'Art', href: 'campaigns/' },
    { name: 'Food', href: 'campaigns/' },
    { name: 'Design', href: 'campaigns/' },
    { name: 'Tech', href: 'campaigns/' }
  ]
  const fundingFilterActions = [
    { name: '0-25%', href: 'campaigns/' },
    { name: '26-50%', href: 'campaigns/' },
    { name: '51-75%', href: 'campaigns/' },
    { name: '76%+', href: 'campaigns/' }
  ]

  return (
    <>
      <div className='filters-container'>
        <div className='filter-by'>
          <p>
            <strong>Filter By</strong>
          </p>
        </div>
        <div className='filter'>
          <Filter title='Location' actions={locationFilterActions} />
        </div>
        <div className='filter'>
          <Filter title='Category' actions={categoryFilterActions} />
        </div>
        <div className='filter'>
          <Filter title='Funding' actions={fundingFilterActions} />
        </div>
      </div>
      {campaigns.length && (
        <>
          <div className='all-campaigns-container'>
            {campaigns.map((campaign) => {
              return (
                <div key={campaign.id} className='campaign-card'>
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
