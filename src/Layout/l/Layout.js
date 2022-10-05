import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateRaffle from '../../Pages/Create/CreateRaffle'
import Home from '../../Pages/Home/Home'
import Profile from '../../Pages/Profile/Profile'
import ProfileInfo from '../../Pages/ProfileInfo'
import RaffleDetails from '../../Pages/RaffleDetails/RaffleDetails'
const Layout = () => {
  return (
    <div
      style={{ backgroundColor: '#22132E' }}
    >
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/my' element={<Profile />}/>
          <Route path='/profile' element={<ProfileInfo />}/>
          <Route path='/raffle/:id' element={<RaffleDetails />}/>
          <Route path='/create/raffle' element={<CreateRaffle />}/>
        </Routes>
    </div>
  )
}

export default Layout