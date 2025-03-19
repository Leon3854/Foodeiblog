import { FaInstagram, FaRegEnvelope } from "react-icons/fa"
import { FaFacebookF, FaYoutube } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa6"
import {Link} from 'react-router-dom'

import "./Humberger.component.css"
import HumburgerForm from "../../../../components/ui/humburger-form/HumburgerForm"

function Humberger() {
	return (
		<>
		{/* <!-- Humberger Begin --> */}
    <div className="humberger__menu__overlay"></div>
    <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
            <Link to="./index.html"><img src="/humberger/humberger-logo.png" alt="img"/></Link>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
            <ul>
                <li><Link to="./index.html">Home</Link></li>
                <li><Link to="#">Recipes</Link></li>
                <li><Link to="#">Dinner</Link></li>
                <li><Link to="#">Desserts</Link></li>
                <li className="dropdown"><Link to="#">Pages</Link>
                    <ul className="dropdown__menu">
                        <li><Link to="./categories-grid.html">Categories Grid</Link></li>
                        <li><Link to="./categories-list.html">Categories List</Link></li>
                        <li><Link to="./single-post.html">Single Post</Link></li>
                        <li><Link to="./signin.html">Sign In</Link></li>
                        <li><Link to="./404.html">404</Link></li>
                        <li><Link to="./typography.html">Typography</Link></li>
                    </ul>
                </li>
                <li><Link to="./about.html">About</Link></li>
                <li><Link to="./contact.html">Contact</Link></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="humberger__menu__about">
            <div className="humberger__menu__title sidebar__item__title">
                <h6>About me</h6>
            </div>
            <img src="/humberger/humberger-about.jpg" alt="img"/>
           <h6>Hi every one! I,m Lena Mollein.</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            <div className="humberger__menu__about__social sidebar__item__follow__links">
                <Link to="https://facebook.com" className="facebook-icon"><FaFacebookF className="sidebar__icon"/></Link>
                <Link to="http://twitter"><FaTwitter className="sidebar__icon"/></Link>
                <Link to="http://youtube.com"><FaYoutube className="sidebar__icon"/></Link>
                <Link to="http://instagram.com"><FaInstagram className="sidebar__icon"/></Link>
                <Link to="#"><FaRegEnvelope className="sidebar__icon"/></Link>
            </div>
        </div>
        <div className="humberger__menu__subscribe">
            <div className="humberger__menu__title sidebar__item__title">
                <h6>Subscribe</h6>
            </div>
            <p>Subscribe to our newsletter and get our newest updates right on your inbox.</p>
            <HumburgerForm />
        </div>
    </div>
    {/* <!-- Humberger End --> */}
		</>
	)
}
export default Humberger