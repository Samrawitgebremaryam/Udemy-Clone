import React, { useEffect, useState, createContext } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LOGIN from './components/Login/Login'
import SIGNUP from './components/Signup/Signup'
import CourseDetailsPage from './pages/course-details-page/CourseDetailsPage'; 
function App() {

 return (
    
      <div >
          <Header/>
          <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path="/Udemy-Clone/courses/:id" element={<CourseDetailsPage />} />
         <Route path="/login" element={<LOGIN />} />
         <Route path="/signup" element={<SIGNUP />} />
        </Routes>
        <Footer/>
	
      </div>
      
  )
}

export default App
