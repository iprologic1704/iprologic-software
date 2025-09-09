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
                  <p className="mb-5">Working with this team has been an amazing experience. They delivered our project on time and exceeded our expectations with their creativity and professionalism...</p>
                  <h5 className="name mb-2">Ravi Jakkala</h5>
                  <span className="designation">UI Developer</span>
                </div>
                <div className="carousel-item">
                  <p className="mb-5">The mobile app they developed for us is fast, user-friendly, and exactly what we needed. Our customers love it!...</p>
                  <h5 className="name mb-2">Yeswanth</h5>
                  <span className="designation">Android Developer</span>
                </div>
                <div className="carousel-item">
                  <p className="mb-5">The UI/UX design was spot on. Our website now looks modern and is much easier to navigate. Great work!...</p>
                  <h5 className="name mb-2">Sneha </h5>
                  <span className="designation">Full stack developer</span>
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
