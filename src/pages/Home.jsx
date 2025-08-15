import React from 'react';
import FeedbackCarousel from '../components/FeedbackCarousel';
import RequestQuoteSection from '../components/RequestQuoteSection'
import ContactUsSection from '../components/ContactUsSection'
import aboutHero from '../images/hero_one.gif';

const Home = () => {
  return (
    <div>
      <div class="hero-banner">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 mb-3">
              <h4 class="mb-4">Best Business Solutions</h4>
              <h1>We're In The Business Of Helping You Start Your Business</h1>
              <div>
                <a href="" class="btn btn-primary">Contact Us</a>
                <a href="" class="btn btn-secondary">View Services</a>
              </div>
            </div>

            <div class="col-md-6">
              <img  src={aboutHero} alt="" class="img-fluid" />
            </div>

          </div>
        </div>
      </div>

      <div className="container service-cards">
        <div className="row justify-content-center d-flex">
          <div className="col service-block-three">
            <div className="">
              <div className="inner-box"><i className="icon fa fa-desktop"></i>
                <h6 className="title"><a href="/page-service-details" className="">Web & Graphic<br />Design</a></h6>
                <div className="text">Providing the solutions for tech business</div>
              </div>
            </div>
          </div>
          <div className="col service-block-three">
            <div className="">
              <div className="inner-box"><i className="icon fa fa-pen-nib"></i>
                <h6 className="title"><a href="/page-service-details" className="">UI UX for<br />Web & Mobile</a></h6>
                <div className="text">Providing the solutions for tech business</div>
              </div>
            </div>
          </div>
          <div className="col service-block-three">
            <div className="">
              <div className="inner-box"><i className="icon fa fa-chart-simple"></i>
                <h6 className="title"><a href="/page-service-details" className="">SEO & Digital Marketing Services</a></h6>
                <div className="text">Providing the solutions for tech business</div>
              </div>
            </div>
          </div>
          <div className="col service-block-three">
            <div className="">
              <div className="inner-box"><i className="icon fa fa-mobile-alt"></i>
                <h6 className="title"><a href="/page-service-details" className="">Android & IOS<br />Apps Development</a></h6>
                <div className="text">Providing the solutions for tech business</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section>
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-md-6 pe-5 mb-3">
              <img  src={aboutHero} class="img-fluid" alt="About Iprologic" />
            </div>
            <div class="col-md-6">
              <h6>ABOUT OUR COMPANY</h6>
              <h2 class="hero-heading">Always Deliver More than you Expected</h2>
              <p class="mb-3">We build software that empowers organizations to effectively integrate their data, decisions, and operations. Staff Augmentation Services Web Development (Application iOS and Android)</p>

              <ul class="list-style-three">
                <li>UI/UX design</li>
                <li>Mobile Application development</li>
                <li>Project maintenance</li>
                <li>Digital Transformation</li>
                <li>Make Quality Products</li>
              </ul>
              <p><a href="" class="btn btn-light">DISCOVER MORE</a></p>
            </div>
          </div>
        </div>
      </section>

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
        <section className="bg-blue">
          <div className="container">
            <div className="row">
              <div className="col-md-3 text-center text-white">
                <div className="icon">
                  <i className="fa fa-thumbs-up"></i>
                </div>
                <h3 className="mb-3"><b>549</b></h3>
                <p>Projects Completed</p>
              </div>
              <div className="col-md-3 text-center text-white">
                <div className="icon">
                  <i className="fa fa-users"></i>
                </div>
                <h3 className="mb-3"><b>45</b></h3>
                <p>Team Size</p>
              </div>
              <div className="col-md-3 text-center text-white">
                <div className="icon">
                  <i className="fa fa-smile"></i>
                </div>
                <h3 className="mb-3"><b>260</b></h3>
                <p>SATISFIED CLIENTS</p>
              </div>
              <div className="col-md-3 text-center text-white">
                <div className="icon">
                  <i className="fa fa-thumbs-up"></i>
                </div>
                <h3 className="mb-3"><b>549</b></h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>

<FeedbackCarousel />
</div>
<div>
                <ContactUsSection />
                <RequestQuoteSection />
            </div>

    </div>




  );
};

export default Home;
