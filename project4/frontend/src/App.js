import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { fetchCampaigns } from './helpers/api'
import ShowCampaign from './pages/ShowCampaign'
import AllCampaigns from './pages/AllCampaigns'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    fetchCampaigns().then(setCampaigns)
  }, [])

  campaigns.length && console.log(campaigns)

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/campaigns/:id' element={<ShowCampaign />} />
            <Route path='/campaigns' element={<AllCampaigns />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home campaigns={campaigns} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
