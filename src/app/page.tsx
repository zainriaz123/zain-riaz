import FeaturedCourses from '@/components/FeaturedCourses'
import FeaturedWebinars from '@/components/FeaturedWebinars'
import HeroSection from '@/components/HeroSection'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { Spotlight } from '@/components/ui/spotlight'
//import WhyChooseUS from '@/components/WhyChooseUs'
import React from 'react'

 const page = () => {
  return (
    <main className='min-h-screen bg-black/[0,96] bg-grid-white/[0.06]'>
      <HeroSection/>
      <Spotlight/>
    <BackgroundGradient/>
    <FeaturedCourses/>
    <FeaturedWebinars/>
    </main>
  )
}

export default page
