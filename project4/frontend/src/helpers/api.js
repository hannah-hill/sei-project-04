import axios from 'axios'
import { setToken } from './auth'

const baseUrl = '/api/'

export const fetchCampaigns = async () => {
  const config = {
    method: 'get',
    url: `${baseUrl}/campaigns/`,
    headers: {},
  }

  const response = await axios(config)
  return response.data
}

export const fetchCampaign = async (id) => {
  const config = {
    method: 'get',
    url: `${baseUrl}/campaigns/${id}`,
    headers: {},
  }
  const response = await axios(config)
  return response.data
}

export const loginUser = async (data) => {
  const config = {
    method: 'post',
    url: `${baseUrl}/auth/login/`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  }
  try {
    const response = await axios(config)
    setToken(response.data.token)
    console.log(response)
  } catch (err) {
    console.log(err)
  }
}
