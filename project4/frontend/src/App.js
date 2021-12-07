import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useNavigate } from 'react-router'
import { fetchCampaigns } from './helpers/api'
import { getToken, removeToken } from './helpers/auth'
import ShowCampaign from './pages/ShowCampaign'
import AllCampaigns from './pages/AllCampaigns'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import StartCampaign from './pages/StartCampaign'

function App() {
  const [campaigns, setCampaigns] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetchCampaigns().then(setCampaigns)
  }, [])
  campaigns.length && console.log(campaigns)

  useEffect(() => {
    getToken() ? setLoggedIn(true) : setLoggedIn(false)
  }, [])

  const handleLogout = () => {
    removeToken()
    setLoggedIn(false)
  }

  return (
    <>
      <Router>
        <Header
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          handleLogout={handleLogout}
        />
        <main>
          <Routes>
            <Route path='/campaigns/:id' element={<ShowCampaign />} />
            <Route
              path='/campaigns/new'
              element={<StartCampaign loggedIn={loggedIn} />}
            />
            <Route path='/campaigns' element={<AllCampaigns />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Home campaigns={campaigns} />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
