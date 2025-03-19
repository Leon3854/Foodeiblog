import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import useSetBgImages from "../../hooks/set-bg-image/useSetBgImages";
import MainSlider from "../../components/ui/main-slider/MainSlider";




function MainPage() {
	useSetBgImages('.set-bg')
	

	return (
		<>
		<MainSlider />

    {/* <!-- Categories Section Begin --> */}
    <section className="categories spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="categories__item set-bg" data-setbg="/categories/cat-1.jpg">
                        <div className="categories__hover__text">
                            <h5>Dinner</h5>
                            <p>28 articles</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="categories__item set-bg" data-setbg="/categories/cat-2.jpg">
                        <div className="categories__hover__text">
                            <h5>Dinner</h5>
                            <p>28 articles</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="categories__item set-bg" data-setbg="/categories/cat-3.jpg">
                        <div className="categories__hover__text">
                            <h5>Dinner</h5>
                            <p>28 articles</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="categories__item set-bg" data-setbg="/categories/cat-4.jpg">
                        <div className="categories__hover__text">
                            <h5>Dinner</h5>
                            <p>28 articles</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="categories__post">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="categories__post__item categories__post__item--large">
                            <div className="categories__post__item__pic set-bg"
                                data-setbg="/categories/categories-post/cp-1.jpg">
                                <div className="post__meta">
                                    <h4>08</h4>
                                    <span>Aug</span>
                                </div>
                            </div>
                            <div className="categories__post__item__text">
                                <ul className="post__label--large">
                                    <li>Vegan</li>
                                    <li>Desserts</li>
                                </ul>
                                <h3><Link to="#">The Absolute Best Way to Cook Steak Perfectly, According to Wayyy Too
                                        Many Tests</Link></h3>
                                <ul className="post__widget">
                                    <li>by <span>Admin</span></li>
                                    <li>3 min read</li>
                                    <li>20 Comment</li>
                                </ul>
                                <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                    excepteur sint ...</p>
                                <Link to="#" className="primary-btn">Read more</Link>
                                <div className="post__social">
                                    <span>Share</span>
                                    <Link to="#"><i className="fa fa-facebook"></i> <span>82</span></Link>
                                    <Link to="#"><i className="fa fa-twitter"></i> <span>24</span></Link>
                                    <Link to="#"><i className="fa fa-envelope-o"></i> <span>08</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="categories__post__item">
                                    <div className="categories__post__item__pic small__item set-bg"
                                        data-setbg="/categories/categories-post/cp-2.jpg">
                                        <div className="post__meta">
                                            <h4>08</h4>
                                            <span>Aug</span>
                                        </div>
                                    </div>
                                    <div className="categories__post__item__text">
                                        <span className="post__label">Recipe</span>
                                        <h3><Link to="#">The Best Weeknight Baked Potatoes, 3 Creative Ways</Link></h3>
                                        <ul className="post__widget">
                                            <li>by <span>Admin</span></li>
                                            <li>3 min read</li>
                                            <li>20 Comment</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices
                                            gravida...</p>
                                    </div>
                                </div>
                                <div className="categories__post__item">
                                    <div className="categories__post__item__pic set-bg"
                                        data-setbg="/categories/categories-post/cp-4.jpg">
                                        <div className="post__meta">
                                            <h4>08</h4>
                                            <span>Aug</span>
                                        </div>
                                    </div>
                                    <div className="categories__post__item__text">
                                        <ul className="post__label--large">
                                            <li>Vegan</li>
                                            <li>Desserts</li>
                                        </ul>
                                        <h3><Link to="#">The Best Grass Stain Remover Is Already In Your Pantry</Link></h3>
                                        <ul className="post__widget">
                                            <li>by <span>Admin</span></li>
                                            <li>3 min read</li>
                                            <li>20 Comment</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices
                                            gravida...</p>
                                    </div>
                                </div>
                                <div className="categories__post__item__plain set-bg"
                                    data-setbg="/categories/categories-post/cp-6.jpg">
                                    <div className="categories__post__item__text">
                                        <div className="post__meta">
                                            <h4>08</h4>
                                            <span>Aug</span>
                                        </div>
                                        <ul className="post__label--large">
                                            <li>Vegan</li>
                                            <li>Desserts</li>
                                        </ul>
                                        <h3><Link to="#">This Summer Snacking Cake Is theSweetest Excuse to...</Link></h3>
                                        <div className="post__social">
                                            <span>Share</span>
                                            <Link to="#"><i className="fa fa-facebook"></i> <span>82</span></Link>
                                            <Link to="#"><i className="fa fa-twitter"></i> <span>24</span></Link>
                                            <Link to="#"><i className="fa fa-envelope-o"></i> <span>08</span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="categories__post__item">
                                    <div className="categories__post__item__pic smaller__large set-bg"
                                        data-setbg="/categories/categories-post/cp-8.jpg">
                                        <div className="post__meta">
                                            <h4>08</h4>
                                            <span>Aug</span>
                                        </div>
                                    </div>
                                    <div className="categories__post__item__text">
                                        <span className="post__label">Smoothie</span>
                                        <h3><Link to="#">This 2-Ingredient Spread Makes Any Egg Sandwich So Much
                                                Better</Link></h3>
                                        <ul className="post__widget">
                                            <li>by <span>Admin</span></li>
                                            <li>3 min read</li>
                                            <li>20 Comment</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices
                                            gravida...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="categories__post__item">
                                    <div className="categories__post__item__pic smaller__large set-bg"
                                        data-setbg="/categories/categories-post/cp-3.jpg">
                                        <div className="post__meta">
                                            <h4>08</h4>
                                            <span>Aug</span>
                                        </div>
                                    </div>
                                    <div className="categories__post__item__text">
                                        <span className="post__label">Dinner</span>
                                        <h3><Link to="#">17 Perfect Gifts for Your Vegan Friend Because Sometimes...</Link>
                                        </h3>
                                        <ul className="post__widget">
                                            <li>by <span>Admin</span></li>
                                            <li>3 min read</li>
                                            <li>20 Comment</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices
                                            gravida...</p>
                                    </div>
                                </div>
                                <div className="categories__post__item__small">
                                    <img src="/categories/categories-post/quote.png" alt="quote" />
                                    <p>Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt labore et dolore magna aliqua gravida.</p>
                                    <div className="posted__by">Elena T.Jaivy</div>
                                </div>
                                <div className="categories__post__item">
                                    <div className="categories__post__item__pic smaller__large set-bg"
                                        data-setbg="/categories/categories-post/cp-5.jpg">
                                        <div className="post__meta">
                                            <h4>08</h4>
                                            <span>Aug</span>
                                        </div>
                                    </div>
                                    <div className="categories__post__item__text">
                                        <span className="post__label">Drinks</span>
                                        <h3><Link to="#">A 5-Minute Peach Mug Cobbler That Just So Happens to...</Link></h3>
                                        <ul className="post__widget">
                                            <li>by <span>Admin</span></li>
                                            <li>3 min read</li>
                                            <li>20 Comment</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices
                                            gravida...</p>
                                    </div>
                                </div>
                                <div className="categories__post__item">
                                    <div className="categories__post__item__pic set-bg"
                                        data-setbg="/categories/categories-post/cp-7.jpg">
                                        <div className="post__meta">
                                            <h4>08</h4>
                                            <span>Aug</span>
                                        </div>
                                    </div>
                                    <div className="categories__post__item__text">
                                        <ul className="post__label--large">
                                            <li>Vegan</li>
                                            <li>Desserts</li>
                                        </ul>
                                        <h3><Link to="#">Fresh Herb Polenta with Parsnip Chips and Maple Butter</Link></h3>
                                        <ul className="post__widget">
                                            <li>by <span>Admin</span></li>
                                            <li>3 min read</li>
                                            <li>20 Comment</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices
                                            gravida...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 text-center">
                                <div className="load__more__btn">
                                    <Link to="#">Load more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="sidebar__item">
                            <div className="sidebar__about__item">
                                <div className="sidebar__item__title">
                                    <h6>About me</h6>
                                </div>
                                <img src="/sidebar/sidebar-about.jpg" alt="sidebar-about"/>
                                <h6>Hi every one! I,m <span>Lena Mollein.</span></h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.</p>
                                <Link to="#" className="primary-btn">Read more</Link>
                            </div>
                            <div className="sidebar__follow__item">
                                <div className="sidebar__item__title">
                                    <h6>Follow me</h6>
                                </div>
                                <div className="sidebar__item__follow__links">
                                    <Link to="#"><FaFacebookF /></Link>
                                    <Link to="#"><FaTwitter /></Link>
                                    <Link to="#"><FaYoutube /></Link>
                                    <Link to="#"><FaInstagram /></Link>
                                    <Link to="#"><FaRegEnvelope /></Link>
                                </div>
                            </div>
                            <div className="sidebar__feature__item">
                                <div className="sidebar__item__title">
                                    <h6>Feature Posts</h6>
                                </div>
                                <div className="sidebar__feature__item__large set-bg"
                                    data-setbg="/sidebar/feature-post.jpg">
                                    <div className="sidebar__feature__item__large--text">
                                        <span>Dinner</span>
                                        <h5><Link to="#">This Japanese Way of Making Iced Coffee Is a Game...</Link></h5>
                                    </div>
                                </div>
                                <div className="sidebar__feature__item__list">
                                    <div className="sidebar__feature__item__list__single">
                                        <div className="post__meta">
                                            <h4>08</h4>
                                            <span>Aug</span>
                                        </div>
                                        <div className="post__text">
                                            <span>Dinner</span>
                                            <h5><Link to="#">Grilled Potato and Green Bean Salad</Link></h5>
                                        </div>
                                    </div>
                                    <div className="sidebar__feature__item__list__single">
                                        <div className="post__meta">
                                            <h4>05</h4>
                                            <span>Aug</span>
                                        </div>
                                        <div className="post__text">
                                            <span>Smoothie</span>
                                            <h5><Link to="#">The $8 French Rosé I Buy in Bulk Every Summer</Link></h5>
                                        </div>
                                    </div>
                                    <div className="sidebar__feature__item__list__single">
                                        <div className="post__meta">
                                            <h4>26</h4>
                                            <span>jul</span>
                                        </div>
                                        <div className="post__text">
                                            <span>Desert</span>
                                            <h5><Link to="#">Ina Garten's Skillet-Roasted Lemon Chicken</Link></h5>
                                        </div>
                                    </div>
                                    <div className="sidebar__feature__item__list__single">
                                        <div className="post__meta">
                                            <h4>16</h4>
                                            <span>jul</span>
                                        </div>
                                        <div className="post__text">
                                            <span>Vegan</span>
                                            <h5><Link to="#">The Best Weeknight Baked Potatoes, 3 Creative Ways</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar__item__banner">
                                <img src="/sidebar/banner.jpg" alt="banner"/>
                            </div>
                            <div className="sidebar__item__categories">
                                <div className="sidebar__item__title">
                                    <h6>Categories</h6>
                                </div>
                                <ul>
                                    <li><Link to="#">Recipes <span>128</span></Link></li>
                                    <li><Link to="#">Dinner <span>32</span></Link></li>
                                    <li><Link to="#">Dessert <span>86</span></Link></li>
                                    <li className="p-left"><Link to="#">Smothie <span>25</span></Link></li>
                                    <li className="p-left"><Link to="#">Drinks <span>36</span></Link></li>
                                    <li className="p-left"><Link to="#">Cakes <span>15</span></Link></li>
                                    <li><Link to="#">Vegan <span>63</span></Link></li>
                                    <li><Link to="#">Weightloss <span>27</span></Link></li>
                                </ul>
                            </div>
                            <div className="sidebar__subscribe__item">
                                <div className="sidebar__item__title">
                                    <h6>Subscribe</h6>
                                </div>
                                <p>Subscribe to our newsletter and get our newest updates right on your inbox.</p>
                                <form action="#">
                                    <input type="text" className="email-input" placeholder="Your email"/>
                                    <label for="s-agree-check">
                                        I agree to the terms & conditions
                                        <input type="checkbox" id="s-agree-check"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <button type="submit" className="site-btn">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Categories Section End --> */}
		</>
	)

}
export default MainPage