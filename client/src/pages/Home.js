import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchCategories, fetchTrendingCampaigns } from '../helpers/api'
import CampaignCard from '../components/CampaignCard'

const Home = () => {
  const [trendingCampaigns, setTrendingCampaigns] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchTrendingCampaigns().then(setTrendingCampaigns)
    fetchCategories().then(setCategories)
  }, [])

  return (
    <>
      <div className='hero'>
        <h2>A platform to support creativity and innovation.</h2>
        <h2>
          Fund a <strong>crowd</strong> campaign.
        </h2>
        <div className='hero-buttons'>
          <Link to='/campaigns/new/'>
            <p>Start a campaign</p>
          </Link>
          <Link to='/campaigns/'>
            <p>Browse campaigns</p>
          </Link>
        </div>
      </div>
      <section className='trending-container'>
        <h3 className='trending-header'>Trending campaigns</h3>
        <div className='trending-campaigns'>
          {trendingCampaigns &&
            trendingCampaigns.slice(0, 3).map((campaign) => (
              <div key={campaign.id} className='campaign-card'>
                <CampaignCard {...campaign} />
              </div>
            ))}
        </div>
      </section>
      <section className='home-bottom'>
        <div className='bottom-container'>
          <div className='categories-container'>
            <h3 className='h3'>Categories</h3>
            <div className='categories-list'>
              {categories &&
                categories.map((category) => (
                  <p key={category.category} className='category'>
                    {category.category}
                  </p>
                ))}
            </div>
          </div>
          <div className='featured-container'>
            <h3 className='h3'>Featured campaign</h3>
            <div className='featured-card'>
              {trendingCampaigns &&
                trendingCampaigns.slice(4, 5).map((campaign) => (
                  <div key={campaign.id} className='campaign-card'>
                    <CampaignCard {...campaign} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
