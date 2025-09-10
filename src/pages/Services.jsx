import React from 'react';
import ContactUsSection from '../components/ContactUsSection.jsx';
import RequestQuoteSection from '../components/RequestQuoteSection.jsx';
import HeroBanner from '../components/HeroBanner.jsx';

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
                  <div className="text">We deliver innovative digital marketing strategies that help businesses strengthen their online presence, connect with the right audience, and achieve measurable growth in today’s competitive digital landscape.</div>
                </div>
              </div>

              <div className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon flaticon-business-012-startup"></i></div>
                  <h5 className="title">
                    <a href="/page-service-details" className="">UI UX Design</a>
                  </h5>
                  <div className="text">We create intuitive and engaging UI/UX designs that deliver seamless digital experiences across web and mobile platforms. Our approach focuses on understanding user behavior and combining it with modern design trends to ensure every interaction feels natural, efficient, and enjoyable.</div>
                </div>
              </div>

              <div className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon flaticon-business-012-startup"></i></div>
                  <h5 className="title">
                    <a href="/page-service-details" className="">Mobile App Development</a>
                  </h5>
                  <div className="text">We design and develop powerful mobile applications that deliver seamless performance and engaging user experiences across Android and iOS platforms. Our approach blends creativity, technology, and functionality to create apps that are not only visually appealing but also scalable, secure, and user-friendly.</div>
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
        <ContactUsSection />
        <RequestQuoteSection />
      </div>
    </div>
  );
};

export default Services;
