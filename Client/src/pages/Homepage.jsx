import React from "react";
import TopCategories from "../components/Top categories/TopCategories";
import TopicsByCategory from "../components/Topicsbycategory/TopicsByCategories";
import Hero from "../components/HeroSection/Hero";
import CoursesSection from "../components/courses-section/CoursesSection";
import ReviewSection from "../components/ReviewSection/ReviewSection";
import TrustedByBest from "../components/TrustedByBest/TrustedByBest";
import Recommendations from "../components/recommendations/Recommendations";
import Businessection from "../components/Business section/BusinessSection";
import InstructorSection from "../components/InstructorSection/InstructorSection";
function Homepage() {
  return (
    <>
      <Hero />
      <TrustedByBest />
      <CoursesSection />
      <ReviewSection />
      <Recommendations />
      <TopCategories />
      <TopicsByCategory />
      <Businessection />
      <InstructorSection />
    </>
  );
}

export default Homepage;