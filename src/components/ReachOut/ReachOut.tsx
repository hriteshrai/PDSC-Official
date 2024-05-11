import './ReachOut.css'
import Executives from '../../sub_components/Executives/Executives'

export default function ReachOut() {
    return (
        <section className="section contact" data-section="section6">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Let’s Keep In Touch</h2>
            </div>
          </div>
          <div className="col-md-6">
            <form action="https://formspree.io/f/mjvlkjbe" method="POST">
              <div className="row">
                <div className="col-md-6">
                  <fieldset>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      name="email"
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      name="number"
                      type="text"
                      className="form-control"
                      id="number"
                      placeholder="Phone Number"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      name="join"
                      type="text"
                      className="form-control"
                      id="join"
                      placeholder="Why join us?"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <textarea
                      name="message"
                      rows={6}
                      className="form-control"
                      id="message"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button">
                      Send Message Now
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div id="map">
              <iframe
                src="https://maps.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7066.329710702196!2d85.31832183796249!3d27.681299219534612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x951b3c8ac733e3ec!2sIOE%2C%20Pulchowk%20Campus!5e0!3m2!1sen!2snp!4v1628866973382!5m2!1sen!2snp"
                width="100%"
                height="422px"
                frameBorder="0"
                style= {{border: "0"}}
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div
            style= {{textAlign: "center"}}
            id="direct_contact_section"
            className="col-md-12 col-lg-12 col-sm-12 col-xs-12"
          >
            <h4>Reach out directly to our I.O.E Pulchowk Campus Leads</h4>
            <Executives />
          </div>
        </div>
      </div>
    </section>
    )
}