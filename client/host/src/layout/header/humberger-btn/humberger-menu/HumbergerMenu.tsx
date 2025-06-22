
import { useSetBgImages } from '../../../../../../shared/src/hooks/set-bg-image/useSetBgImages';
import Social from '../../../../../../shared/src/components/social/Social';
import HumbergerNav from './humberger-nav/HumbergerNav';


function HumbergerMenu () {
	useSetBgImages('set-bg')

	return(
		<>
    <div className="humberger__menu__overlay"></div>
    <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
            <a href="./index.html"><img src="/images/temp/humberger/humberger-logo.png" alt="logotip humberger"/></a>
        </div>
        <HumbergerNav />
        <div id="mobile-menu-wrap"></div>
        <div className="humberger__menu__about">
            <div className="humberger__menu__title sidebar__item__title">
                <h6>About me</h6>
            </div>
            <img src="/images/temp/humberger/humberger-about.jpg" alt="humberger-about"/>
            <h6>Hi every one! I,m Lena Mollein.</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
            <div className="humberger__menu__about__social sidebar__item__follow__links">
							<Social />
            </div>
        </div>
        <div className="humberger__menu__subscribe">
            <div className="humberger__menu__title sidebar__item__title">
                <h6>Subscribe</h6>
            </div>
            <p>Subscribe to our newsletter and get our newest updates right on your inbox.</p>
            <form action="#">
                <input type="text" className="email-input" placeholder="Your email"/>
                <label for="agree-check">
                    I agree to the terms & conditions
                    <input type="checkbox" id="agree-check"/>
                    <span className="checkmark"></span>
                </label>
                <button type="submit" className="site-btn">Subscribe</button>
            </form>
        </div>
    </div>
		</>
	)
}
export default HumbergerMenu