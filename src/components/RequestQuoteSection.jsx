function RequestQuoteSection() {
  return (
    <section className="mt-low">
      <div className="container">
        <div className="row d-flex align-items-end">
          <div className="col-md-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1564888565917!2d78.5535272!3d17.4059589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb993500da2b83%3A0x71817374e3378f71!2sPista%20House%20Uppal!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              width="100%"
              height="400"
              style={{ border: 0 }}
            ></iframe>
          </div>
          <div className="col-md-7">
            <div className="card bg-white p-5" style={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.3)', borderRadius: 0 }}>
              <h3 className="mb-3"><b>Request A Quote</b></h3>
              <form method="" action="" className="row">
                <div className="form-group col-md-6">
                  <input name="form_name" className="form-control" type="text" placeholder="Your Name" />
                </div>
                <div className="form-group col-md-6">
                  <input name="form_email" className="form-control required email" type="email" placeholder="Email Address" />
                </div>
                <div className="form-group col-md-6">
                  <input name="form_phone" className="form-control" type="text" placeholder="Phone Number" />
                </div>
                <div className="form-group col-md-6">
                  <input name="form_location" className="form-control" type="text" placeholder="Location" />
                </div>
                <div className="form-group">
                  <textarea name="form_message" className="form-control required" rows="7" placeholder="Write a Message"></textarea>
                </div>
                <div className="form-group">
                  <input name="form_botcheck" className="form-control" type="hidden" value="" />
                  <button type="submit" className="btn btn-primary"><span className="btn-title">Send A Message</span></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequestQuoteSection;
