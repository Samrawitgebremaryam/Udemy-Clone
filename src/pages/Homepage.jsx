import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { TopCategories } from '../components/Top categories/TopCategories'
import TopicsByCategory from '../components/Topics by category/TopicsByCategories'

function Homepage() {
  return (
    <>
      <Header/>
      <TopCategories/>
      <TopicsByCategory/>

      <Footer/>
   </>
  )
}

export default Homepage
