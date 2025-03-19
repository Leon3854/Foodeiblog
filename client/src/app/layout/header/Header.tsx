import { GiHamburgerMenu } from "react-icons/gi";
import Humberger from "./humberger/Humberger";
import Preloader from "./preloader/Preloader";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import useHamburgerMenu from "../../../hooks/hamburger-menu/useHamburgerMenu";
import useSetBgImages from "../../../hooks/set-bg-image/useSetBgImages";

function Header() {
	useHamburgerMenu()
	useSetBgImages('set-bg')
	return(
		<>
		<Preloader />
		<Humberger />

		{/* <!-- Header Section Begin --> */}
    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-1 col-6 order-md-1 order-1">
                        <div className="header__humberger">
													<GiHamburgerMenu className="humberger__open" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-10 order-md-2 order-3">
                        <nav className="header__menu">
                            <ul>
                                <li><Link to="./index.html">Home</Link></li>
                                <li><Link to="#">Recipes</Link>
                                    <div className="header__megamenu__wrapper">
                                        <div className="header__megamenu">
                                            <div className="header__megamenu__item">
                                                <div className="header__megamenu__item--pic set-bg"
                                                    data-setbg="/megamenu/p-1.jpg">
                                                    <div className="label">Vegan</div>
                                                </div>
                                                <div className="header__megamenu__item--text">
                                                    <h5><Link to="#">How to Make a Milkshake With Any Ice Cream ...</Link>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="header__megamenu__item">
                                                <div className="header__megamenu__item--pic set-bg"
                                                    data-setbg="/megamenu/p-2.jpg">
                                                    <div className="label">Vegan</div>
                                                </div>
                                                <div className="header__megamenu__item--text">
                                                    <h5><Link to="#">How to Make a Milkshake With Any Ice Cream ...</Link>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="header__megamenu__item">
                                                <div className="header__megamenu__item--pic set-bg"
                                                    data-setbg="/megamenu/p-3.jpg">
                                                    <div className="label">Vegan</div>
                                                </div>
                                                <div className="header__megamenu__item--text">
                                                    <h5><Link to="#">How to Make a Milkshake With Any Ice Cream ...</Link>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="header__megamenu__item">
                                                <div className="header__megamenu__item--pic set-bg"
                                                    data-setbg="/megamenu/p-4.jpg">
                                                    <div className="label">Vegan</div>
                                                </div>
                                                <div className="header__megamenu__item--text">
                                                    <h5><Link to="#">How to Make a Milkshake With Any Ice Cream ...</Link>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="header__megamenu__item">
                                                <div className="header__megamenu__item--pic set-bg"
                                                    data-setbg="/megamenu/p-5.jpg">
                                                    <div className="label">Vegan</div>
                                                </div>
                                                <div className="header__megamenu__item--text">
                                                    <h5><Link to="#">How to Make a Milkshake With Any Ice Cream ...</Link>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link to="#">Dinner</Link></li>
                                <li><Link to="#">Desserts</Link></li>
                                <li><Link to="#">Vegan</Link></li>
                                <li className="active"><Link to="./about.html">About</Link></li>
                                <li><Link to="./contact.html">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-2 col-md-1 col-6 order-md-3 order-2">
                        <div className="header__search">
                            <i className="fa fa-search search-switch"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md col-md-2-3">
                    <div className="header__btn">
                        <Link to="./signin.html" className="primary-btn">Subscribe</Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md col-md-2-6">
                    <div className="header__logo">
                        <Link to="#"><img src="./logo.png" alt="logo" /></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md col-md-2-3">
                    <div className="header__social">
                        <Link to="#"><FaFacebookF /></Link>
                        <Link to="#"><FaTwitter /></Link>
                        <Link to="#"><FaYoutube /></Link>
                        <Link to="#"><FaInstagram/></Link>
                        <Link to="#"><FaRegEnvelope /></Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- Header Section End --> */}
		</>
	)
}

export default Header;


