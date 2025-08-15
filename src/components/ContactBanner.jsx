import React from 'react';
import { useLocation } from 'react-router-dom';

function ContactBanner() {
  const location = useLocation();
  const route = location.pathname.replace('/', '');


  return (
    <div className="hero-banner-inner mb-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-white">
            <h2><b>{route}</b></h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
