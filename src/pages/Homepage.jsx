import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { TopCategories } from '../components/Top categories/TopCategories'

function Homepage() {
  return (
    <div>
      <Header/>
      <TopCategories/>
      <Footer/>
    </div>
  )
}

export default Homepage
