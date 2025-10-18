import React from 'react'
import HeroSection from './HeroSection'
import ServicesSection from './ServiceSection'
import AgencyHero from './AgencyHero'
import PortfolioSection from './PortfolioSection'
import Testimonials from './Testimonials'
import ContactForm from '../../components/common/ContactForm'

const Home = () => {
  return (
    <div >
      <HeroSection />
      <ServicesSection />
      <AgencyHero />
      <PortfolioSection />
      <Testimonials />
      <ContactForm />
    </div>
  )
}

export default Home