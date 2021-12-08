import axios from 'axios'
import { setToken, getToken } from './auth'

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

export const createCampaign = async (data) => {
  const config = {
    method: 'post',
    url: `${baseUrl}/campaigns/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    data: data,
  }
  try {
    const response = await axios(config)
    console.log(response.data)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

export const editCampaign = async (id, data) => {
  const config = {
    method: 'put',
    url: `${baseUrl}/campaigns/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    data: data,
  }
  try {
    const response = await axios(config)
    console.log(response.data)
  } catch (err) {
    console.log(err)
  }
}

export const deleteCampaign = async (id) => {
  const config = {
    method: 'delete',
    url: `${baseUrl}/campaigns/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
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

export const registerUser = async (data) => {
  const config = {
    method: 'post',
    url: `${baseUrl}/auth/signup/`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  }
  try {
    const response = await axios(config)
    console.log(response)
  } catch (err) {
    console.log(err)
  }
}
