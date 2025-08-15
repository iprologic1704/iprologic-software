import React from 'react';
import aboutHero from '../images/iprologic-white.svg';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <img src={aboutHero} className="img-fluid mb-3" alt="Iprologic" />
            <p className="mb-3">We build software that empowers organizations to effectively integrate their data, decisions, and operations. </p>
            <p><a href="">Read More</a></p>

            <p className="mt-4 mb-2 text-white"><b>We are in Social</b></p>
            <ul className="social">
              <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
              <li><a href=""><i className="fab fa-x-twitter"></i></a></li>
              <li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href=""><i className="fab fa-instagram"></i></a></li>
              <li><a href=""><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Services</h5>
            <ul>
              <li><a href="">Website Design</a></li>
              <li><a href="">Graphic Design</a></li>
              <li><a href="">Digital Marketing</a></li>
              <li><a href="">UI UX Design</a></li>
              <li><a href="">Mobile App Development</a></li>
              <li><a href="">Database Services</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Registered Address</h5>
            <ul>
              <li className="d-flex">
                <span><i className="fa fa-location-dot me-2 mt-1"></i></span>
                <span>Huda Techno Enclave Rd, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081</span>
              </li>
              <li className="d-flex">
                <span><i className="fa fa-phone me-2 mt-1"></i></span>
                <span><a href="">+91 93906 38010</a></span>
              </li>
              <li className="d-flex">
                <span><i className="fa fa-envelope me-2 mt-1"></i></span>
                <span><a href="">info@iprologicsoftware.com</a></span>
              </li>
              <li className="d-flex">
                <span><i className="fa fa-clock me-2 mt-1"></i></span>
                <span>Mon - Sat: 09:00AM to 06:00 PM</span>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Corporate Address</h5>
            <ul>
              <li className="d-flex">
                <span><i className="fa fa-location-dot me-2 mt-1"></i></span>
                <span>H. No. 2-18/28/103, S.V. Residency, Flat No. 103, Kalyanpuri, Uppal, Hyderabad, Telangana - 500039</span>
              </li>
              <li className="d-flex">
                <span><i className="fa fa-phone me-2 mt-1"></i></span>
                <span><a href="">+91 93906 38010</a></span>
              </li>
              <li className="d-flex">
                <span><i className="fa fa-envelope me-2 mt-1"></i></span>
                <span><a href="">info@iprologicsoftware.com</a></span>
              </li>
              <li className="d-flex">
                <span><i className="fa fa-clock me-2 mt-1"></i></span>
                <span>Mon - Sat: 09:00AM to 06:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mt-5 text-center">
            <small>© 2024 All Rights Reserved by Iprologic Software Solutions.com</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
