import React from 'react'
import HeroBanner from '../components/HeroBanner.jsx'
import FeedbackCarousel from '../components/FeedbackCarousel.jsx'
import ContactUsSection from '../components/ContactUsSection.jsx'
import RequestQuoteSection from '../components/RequestQuoteSection.jsx'
RequestQuoteSection
ContactUsSection
FeedbackCarousel

const Clients = () => {
  return (
    <div>
      <HeroBanner />
      <div>

        <FeedbackCarousel />
      </div>

      <div>
        <ContactUsSection />
        <RequestQuoteSection />
      </div>


    </div>
  )
}

export default Clients