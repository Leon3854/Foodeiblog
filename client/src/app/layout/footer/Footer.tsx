import { FaFacebookF, FaHeart, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import useSetBgImages from "../../../hooks/set-bg-image/useSetBgImages";


function Footer() {

	useSetBgImages('.set-bg')

	return(
		<>
		{/* <!-- Footer Section Begin --> */}
    <footer className="footer">
        <div className="container-fluid">
            <div className="footer__instagram">
                <div className="footer__instagram__avatar">
                    <div className="footer__instagram__avatar--pic">
                        <img src="/footer/instagram-avatar.jpg" alt="footer instagram avatar"/>
                    </div>
                    <div className="footer__instagram__avatar--text">
                        <h5>@ foodieblog</h5>
                        <span>23,7k follower</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                        <div className="footer__instagram__item set-bg" data-setbg="/footer/ip-1.jpg"></div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                        <div className="footer__instagram__item set-bg" data-setbg="/footer/ip-2.jpg">
												</div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                        <div className="footer__instagram__item set-bg" data-setbg="/footer/ip-3.jpg"></div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                        <div className="footer__instagram__item set-bg" data-setbg="/footer/ip-4.jpg"></div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                        <div className="footer__instagram__item set-bg" data-setbg="/footer/ip-5.jpg"></div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                        <div className="footer__instagram__item set-bg" data-setbg="/footer/ip-6.jpg"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer__text">
                        <div className="footer__logo">
                            <Link to="#"><img src="./logo.png" alt="img"/></Link>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut<br /> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra<br /> maecenas accumsan lacus vel facilisis. </p>
                        <div className="footer__social">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram/></a>
                            <a href="#"><FaYoutube/></a>
                            <a href="#"><FaRegEnvelope /></a>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <p>
													Copyright &copy;<script>document.write(new Date().getFullYear());</script>
													All rights reserved | This template is made with <FaHeart /> by
												 <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
											</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer Section End --> */}

		</>
	)

}

export default Footer

function useEffect(arg0: () => void, arg1: never[]) {
	throw new Error("Function not implemented.");
}
