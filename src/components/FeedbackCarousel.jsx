import React from 'react';

function FeedbackCarousel() {
  return (
    <section>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-6">
            <h6>USERS FEEDBACKS</h6>
            <h2 className="hero-heading mb-5">What They’re Talking About Us</h2>
            <p>There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</p>
          </div>

          <div className="col-md-6 bg-dark p-5 text-white">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <p className="mb-5">Roin a lacus arcu. Nullam id dui eu orci maximus...</p>
                  <h5 className="name mb-2">Jessica Brown</h5>
                  <span className="designation">Co Founder</span>
                </div>
                <div className="carousel-item">
                  <p className="mb-5">Roin a lacus arcu. Nullam id dui eu orci maximus...</p>
                  <h5 className="name mb-2">Jessica Brown</h5>
                  <span className="designation">Co Founder</span>
                </div>
                <div className="carousel-item">
                  <p className="mb-5">Roin a lacus arcu. Nullam id dui eu orci maximus...</p>
                  <h5 className="name mb-2">Jessica Brown</h5>
                  <span className="designation">Co Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackCarousel;
