import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { editCampaign, fetchCampaign } from '../helpers/api'
import CampaignForm from '../components/CampaignForm'

const EditCampaign = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [data, setData] = useState({
    title: '',
    byline: '',
    category: '',
    location: '',
    header_img: '',
    target: '',
    duration: '',
    description: '',
  })

  useEffect(() => {
    fetchCampaign(id).then(setData)
  }, [id])

  const handleSubmit = async (event) => {
    event.preventDefault()
    await editCampaign(id, data).then(navigate(`/campaigns/${id}/`))
  }

  const handleChange = ({ target }) => {
    const { name, value } = target
    setData({
      ...data,
      [name]: value,
    })
  }

  const formProps = { data, handleChange }

  return (
    <section>
      <div className='edit-container'>
        <form onSubmit={handleSubmit}>
          <div className='form-container'>
            <CampaignForm formProps={formProps} />
          </div>
          <div className='start-submit'>
            <input type='submit' value='SAVE CHANGES' />
          </div>
        </form>
      </div>
    </section>
  )
}

export default EditCampaign
