import React from 'react'
import { TopCategories } from '../components/Top categories/TopCategories'
import TopicsByCategory from '../components/Topics by category/TopicsByCategories'
import Hero from '../components/HeroSection/Hero'
import CoursesSection from '../components/courses-section/CoursesSection'
import ReviewSection from '../components/ReviewSection/ReviewSection'
import TrustedByBest from '../components/TrustedByBest/TrustedByBest'
function Homepage() {
  return (
    <>
      <Hero/>
      <TrustedByBest/>
      <CoursesSection />
      <ReviewSection />
      <TopCategories/>
      <TopicsByCategory/>

   </>
  )
}

export default Homepage
