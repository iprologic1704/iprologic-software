import React from 'react'
import HeroBanner from '../components/Herobanner'
import FeedbackCarousel from '../components/FeedbackCarousel'
import ContactUsSection from '../components/ContactUsSection'
import RequestQuoteSection from '../components/RequestQuoteSection'
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