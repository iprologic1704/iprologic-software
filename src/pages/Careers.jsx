import React from 'react'
import HeroBanner from '../components/Herobanner'
import FeedbackCarousel from '../components/FeedbackCarousel'
import ContactUsSection from '../components/ContactUsSection'
import RequestQuoteSection from '../components/RequestQuoteSection'

const Careers = () => {
  return (
    <div>
    <HeroBanner />
    <div>

    <section>
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-3">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search by Disignation"/>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search by Location"/>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search by Experience"/>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <button type="submit" value="submit" class="btn btn-primary w-100">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>

    <div>
      <ContactUsSection />
      <RequestQuoteSection />
    </div>


  </div>
  )
}

export default Careers