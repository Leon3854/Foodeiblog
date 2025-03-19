import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";

function AboutPage () {

	return(
		<>
			 {/* <!-- About Section Begin --> */}
    <section className="about spad">
        <div className="container">
            <div className="about__text">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb__text">
                            <h2>About me</h2>
                            <div className="breadcrumb__option">
                                <Link to="#">Home</Link>
                                <span>About</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about__pic__item__large">
                            <img src="/about/about-1.jpg" alt=""/>
                        </div>
                        <div className="about__pic">
                            <div className="about__pic__item">
                                <img src="/about/about-2.jpg" alt=""/>
                            </div>
                            <div className="about__pic__item">
                                <img src="/about/about-3.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__right__text">
                            <h2>Hello every one !!!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, incididunt ut labore et dolore
                                magna aliqua accusantium doloremque laudantium.</p>
                            <ul>
                                <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra</li>
                                <li>Inceptos himenaeos mauris.Integer gravida tincidunt accumsan.</li>
                                <li>Vestibulum nulla mauris, condimentum id felis ac, volutpat volutpat mi.</li>
                                <li>In vitae tempor velit of the impenetrable foliage.</li>
                            </ul>
                            <p>Vestibulum commodo nulla eu augue tincidunt rutrum. Suspendisse interdum lacus in ligula
                                finibus luctus. Vivamus mollis libero vel orci finibus, sit amet malesuada lectus
                                aliquam. In auctor viverra eros. Maecenas elit mi, consectetur nec, sollicitudin sed
                                arcu. Curabitur tempor tempor pharetra ridiculus mus porta tincidunt, purus enim
                                laoreet.</p>
                            <div className="about__right__text__social">
                                <Link to="#"><i className="fa fa-facebook"><FaFacebookF /></i></Link>
                                <Link to="#"><i className="fa fa-twitter"><FaTwitter /></i></Link>
                                <Link to="#"><i className="fa fa-youtube-play"><FaYoutube /></i></Link>
                                <Link to="#"><i className="fa fa-instagram"><FaTwitter /></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- About Section End --> */}
		</>
	)

}
export default AboutPage