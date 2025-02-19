import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutWebpage from './pages/AboutWebpage'
import ProjectsWebpage from './pages/ProjectsWebpage'
import CareerWebpage from './pages/CareerWebpage'
import ContactWebpage from './pages/ContactWebpage'
import Loading from './component/Loading'

import './App.css'

const App = () => {

  const [isLoading , setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false) , 500)
    };
    if(document.readyState == 'complete'){
      handleLoad();
    }else{
      window.addEventListener('load', handleLoad);
    }
    return () => {
      window.removeEventListener('load', handleLoad)
    }

  },[])

  return (
    <>
    {isLoading && <Loading/>}

    <div className={`app-content ${isLoading ? 'hidden' : ''}`}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/about' element={<AboutWebpage/>}/>
      <Route path='/projects' element={<ProjectsWebpage/>}/>
      <Route path='/career' element={<CareerWebpage/>}/>
      <Route path='/contacts' element={<ContactWebpage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App