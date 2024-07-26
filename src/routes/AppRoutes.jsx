import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PostPage from '../pages/PostPage'
import Collections from '../pages/Collections'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/post' element={<PostPage/>}/>
        <Route path='/collections/:collectionName' element={<Collections/>} />
    </Routes>
  )
}

export default AppRoutes