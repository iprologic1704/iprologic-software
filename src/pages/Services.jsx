import React from 'react';
import HeroBanner from '../components/Herobanner';
import ContactUsSection from '../components/ContactUsSection';
import RequestQuoteSection from '../components/RequestQuoteSection';

const Services = () => {
  return (
    <div>  
      <HeroBanner /> 
      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h6>SERVICES WE OFFER</h6>
                <h2 className="hero-heading">We Provide Full Range Services</h2>
              </div>

              <div className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon flaticon-business-012-startup"></i></div>
                  <h5 className="title">
                    <a href="/page-service-details" className="">Digital Marketing</a>
                  </h5>
                  <div className="text">Providing the solutions for tech business</div>
                </div>
              </div>

              <div className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon flaticon-business-012-startup"></i></div>
                  <h5 className="title">
                    <a href="/page-service-details" className="">UI UX Design</a>
                  </h5>
                  <div className="text">Providing the solutions for tech business</div>
                </div>
              </div>

              <div className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon flaticon-business-012-startup"></i></div>
                  <h5 className="title">
                    <a href="/page-service-details" className="">Mobile App Development</a>
                  </h5>
                  <div className="text">Providing the solutions for tech business</div>
                </div>
              </div>

              <div className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon flaticon-business-012-startup"></i></div>
                  <h5 className="title">
                    <a href="/page-service-details" className="">Logo & Branding Design</a>
                  </h5>
                  <div className="text">Providing the solutions for tech business</div>
                </div>
              </div>

              <div className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon flaticon-business-012-startup"></i></div>
                  <h5 className="title">
                    <a href="/page-service-details" className="">Digital Marketing</a>
                  </h5>
                  <div className="text">Providing the solutions for tech business</div>
                </div>
              </div>

              <div className="short-banner-six col-lg-6 col-md-6 col-sm-12 bg-white" data-wow-delay="1200ms">
                <div className="banner-inner">
                  <p className="mb-4">Get Your IT Technology Solutions</p>
                  <h4><b>Don't Waste a Second! Call Us to Solve Your Any IT Solutions</b></h4>
                  <a href="/page-projects" className="btn btn-secondary">
                    <span className="btn-title">Find your solution</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      <div>
      <ContactUsSection/>
      <RequestQuoteSection/>
      </div>
    </div>
  );
};

export default Services;
