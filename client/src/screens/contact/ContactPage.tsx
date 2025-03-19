import { FaMapMarkerAlt } from "react-icons/fa"
import { FaMobileScreenButton, FaRegEnvelope } from "react-icons/fa6"

function ContactPage() {
	return (
		<>
		{/* <!-- Contact Section Begin --> */}
    <section className="contact spad">
			<div className="container">
				<div className="contact__text">
					<div className="row">
							<div className="col-lg-12">
								<div className="breadcrumb__text">
									<h2>Contact</h2>
									<div className="breadcrumb__option">
										<a href="#">Home</a>
										<span>Contact</span>
									</div>
								</div>
							</div>
					</div>
					<div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96748.5538666784!2d-74.25209557318462!3d40.73139236772185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2sNewark%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1585643782289!5m2!1sen!2sbd"
                  height="350"
                  style={{border: 0}}
                  allowFullScreen={false}
                  aria-hidden="false"
									loading="lazy"
                ></iframe>
              </div>
              <div className="contact__widget">
                <ul>
                  <li>
                    <i className="fa fa-map-marker"><FaMapMarkerAlt /></i>
                    <span>John Doe, 123 Main St Chicago, IL 60626</span>
                  </li>
                  <li>
                    <i className="fa fa-mobile"><FaMobileScreenButton /></i>
                    <span>Phone: 258-556-189</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o"><FaRegEnvelope /></i>
                    <span>Email: info@greenorganic.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__form">
                <div className="contact__form__title">
                  <h2>gET IN TOUCH</h2>
                  <p>
                    My experience with Realy is absolutely positive. The themes
                    are beautifully designed and well documented. Realy theme
                    provides quick support.
                  </p>
                </div>
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Website" />
                  <textarea placeholder="Message"></textarea>
                  <button type="submit" className="site-btn">Submit</button>
                </form>
              </div>
            </div>
          </div>
				</div>
			</div>
		</section>
		{/* <!-- Contact Section End -->	 */}
		</>
	)
}
export default ContactPage