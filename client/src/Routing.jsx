import React, { useState } from 'react'
import App from './App'
import { Route, Routes } from 'react-router-dom'
import Jobs from './pages/Jobs'
import About from './pages/About'
import Dashboard from './admin/Dashboard'
import JobForm from './admin/JobForm'
import JobPortal from './admin/JobPortal'
import JobPage from './pages/JobPage'
import Success from './pages/Success'

function Routing() {
  
  return ( 
    <div>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/jobs' element={<Jobs/>}/>
            <Route path='/jobs/:slug' element={<JobPage/>}/>
            <Route path='/admin/jobs' element={<JobPortal/>}/>
            <Route path='/admin/jobs/:category' element={<Dashboard/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/admin' element={<Dashboard/>}/>
            <Route path='/admin/form' element={<JobForm/>}/>
            <Route path='/success' element={<Success/>}/>
        </Routes>
    </div>
  )
}

export default Routing