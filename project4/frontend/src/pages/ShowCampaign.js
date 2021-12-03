import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchCampaign } from '../helpers/api'

const ShowCampaign = () => {
  const [data, setData] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetchCampaign(id).then(setData)
  }, [id])

  console.log('CAMPAIGN DATA -->', data)

  return (
    <div>
      <p>{data.title}</p>
      <p>{data.category}</p>
      <p>{data.location}</p>
      <p>{data.description}</p>
    </div>
  )
}

export default ShowCampaign
