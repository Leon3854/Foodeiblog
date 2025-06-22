import { Link } from "react-router-dom"
import Social from "../../../../shared/src/components/social/Social"
import HumbergerMenu from "./humberger-btn/humberger-menu/HumbergerMenu"
import HumbergerBtn from "./humberger-btn/HumbergerBtn"
import Navigation from "./navigation/Navigation"
import Preloder from "./preloder/Prelodare"
import HeaderSearch from "./search-btn/HeaderSearch"

export default function header() {
	
	return(
		<>
		<Preloder />
		<HumbergerMenu/>

    {/* <!-- Header Section Begin --> */}
    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <HumbergerBtn />
                    <Navigation />
                    <HeaderSearch />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <div className="header__btn">
                        <a href="/signin" className="primary-btn">Subscribe</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="header__logo">
											<Link to="/">
											  <img src="/images/temp/logo.png" 
												alt="Company Logo"/>
											</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="header__social">
                        <Social />
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- Header Section End --> */}
		</>
	)
}
