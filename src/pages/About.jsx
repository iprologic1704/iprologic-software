import React from 'react'
import RequestQuoteSection from '../components/RequestQuoteSection.jsx'
import ContactUsSection from '../components/ContactUsSection.jsx'
import FeedbackCarousel from '../components/FeedbackCarousel.jsx'
// Import image from src/images
import aboutHero from '../images/about-hero.svg';
import HeroBanner from '../components/HeroBanner.jsx';

const About = () => {
    return (
        <div>
            <HeroBanner />
            <div>
                <section>
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 pe-5">
                                <img
                                    src={aboutHero} // use imported image here
                                    className="img-fluid"
                                    alt="About Iprologic"
                                />
                            </div>

                            <div className="col-md-6">
                                <h6>ABOUT OUR COMPANY</h6>
                                <h2 className="hero-heading">Always Deliver More than you Expected</h2>
                                <p className="mb-3">
                                    We build software that empowers organizations to effectively integrate their data, decisions, and operations.
                                    Staff Augmentation Services Web Development (Application iOS and Android)
                                </p>
                                <ul className="list-style-three">
                                    <li>UI/UX design</li>
                                    <li>Mobile Application development</li>
                                    <li>Project maintenance</li>
                                    <li>Digital Transformation</li>
                                    <li>Make Quality Products</li>
                                </ul>
                                <p><a href="" className="btn btn-light">DISCOVER MORE</a></p>
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
                                <h3 className="mb-3"><b>10+</b></h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className="col-md-3 text-center text-white">
                                <div className="icon">
                                    <i className="fa fa-users"></i>
                                </div>
                                <h3 className="mb-3"><b>12</b></h3>
                                <p>Team Size</p>
                            </div>
                            <div className="col-md-3 text-center text-white">
                                <div className="icon">
                                    <i className="fa fa-smile"></i>
                                </div>
                                <h3 className="mb-3"><b>50+</b></h3>
                                <p>SATISFIED CLIENTS</p>
                            </div>
                            <div className="col-md-3 text-center text-white">
                                <div className="icon">
                                    <i className="fa fa-thumbs-up"></i>
                                </div>
                                <h3 className="mb-3"><b>5</b></h3>
                                <p>Coming Projects</p>
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
    )
}

export default About