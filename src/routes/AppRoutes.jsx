import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PostPage from '../pages/PostPage'
import Collections from '../pages/Collections'
import Location from '../pages/Location'
import Profile from '../pages/Profile'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/post' element={<PostPage/>}/>
        <Route path='/collections/:collectionName' element={<Collections/>} />
        <Route path='/location' element={<Location/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}

export default AppRoutes