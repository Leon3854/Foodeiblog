// import React from "react";
import OwlCarousel from "react-owl-carousel";
// import "react-owl-carousel/lib/styles.css";
import "./MainSlider.component.css"; // Ваши стили
import useSetBgImages from "../../../hooks/set-bg-image/useSetBgImages"; // Ваш хук


function MainSlider() {
  useSetBgImages("set-bg");

  const options = {
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    // navText: ["<span className='arrow_carrot-left'><span/>", "<span className='arrow_carrot-right'><span/>"],
		navText: [
			"<div className='nav-btn prev-slide'><span class='arrow_carrot-left'></span></div>",
			"<div class='nav-btn next-slide'><span class='arrow_carrot-right'></span></div>",
		], // Кастомный HTML для кнопок
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
  };

  return (
    <section className="hero">
      <OwlCarousel className="hero__slider owl-carousel" {...options}>
        <div className="hero__item">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 p-0">
                <div
                  className="hero__inside__item hero__inside__item--wide set-bg"
                   data-setbg="/hero/hero-1.jpg"
                >
                  <div className="hero__inside__item__text">
                    <div className="hero__inside__item--meta">
                      <span>08</span>
                      <p>Aug</p>
                    </div>
                    <div className="hero__inside__item--text">
                      <ul className="label">
                        <li>Vegan</li>
                        <li>Desserts</li>
                      </ul>
                      <h4>
                        Vegan White Peach Mug Cobbler With CardamomVegan
                        <br /> White Peach Mug Cobbler With Cardamom
                      </h4>
                      <ul className="widget">
                        <li>
                          by <span>Admin</span>
                        </li>
                        <li>3 min read</li>
                        <li>20 Comment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 p-0">
                <div
                  className="hero__inside__item hero__inside__item--small set-bg"
                   data-setbg="/hero/hero-2.jpg"
                >
                  <div className="hero__inside__item__text">
                    <div className="hero__inside__item--meta">
                      <span>08</span>
                      <p>Aug</p>
                    </div>
                    <div className="hero__inside__item--text">
                      <ul className="label">
                        <li>Vegan</li>
                        <li>Desserts</li>
                      </ul>
                      <h5>
                        How to Make a Milkshake With Any <br />
                        Ice Cream, Any Toppings...
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  className="hero__inside__item hero__inside__item--small set-bg"
                   data-setbg="/hero/hero-3.jpg"
                >
                  <div className="hero__inside__item__text">
                    <div className="hero__inside__item--meta">
                      <span>08</span>
                      <p>Aug</p>
                    </div>
                    <div className="hero__inside__item--text">
                      <ul className="label">
                        <li>Vegan</li>
                        <li>Desserts</li>
                      </ul>
                      <h5>
                        Vintage Copper Preserve Pan with <br />
                        Brass Handles, Mid 19th Century
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 p-0">
                <div
                  className="hero__inside__item set-bg"
                   data-setbg="/hero/hero-4.jpg"
                >
                  <div className="hero__inside__item__text">
                    <div className="hero__inside__item--meta">
                      <span>08</span>
                      <p>Aug</p>
                    </div>
                    <div className="hero__inside__item--text">
                      <ul className="label">
                        <li>Vegan</li>
                        <li>Desserts</li>
                      </ul>
                      <h5>
                        Marinated Lentil Salad with Zucch <br />
                        ini and Tomatoes
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__item">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="hero__inside__item hero__inside__item--wide set-bg"
                                data-setbg="/hero/hero-1.jpg">
                                <div className="hero__inside__item__text">
                                    <div className="hero__inside__item--meta">
                                        <span>08</span>
                                        <p>Aug</p>
                                    </div>
                                    <div className="hero__inside__item--text">
                                        <ul className="label">
                                            <li>Vegan</li>
                                            <li>Desserts</li>
                                        </ul>
                                        <h4>Vegan White Peach Mug Cobbler With CardamomVegan<br /> White Peach Mug
                                            Cobbler With Cardamom</h4>
                                        <ul className="widget">
                                            <li>by <span>Admin</span></li>
                                            <li>3 min read</li>
                                            <li>20 Comment</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className="hero__inside__item hero__inside__item--small set-bg"
                                data-setbg="/hero/hero-3.jpg">
                                <div className="hero__inside__item__text">
                                    <div className="hero__inside__item--meta">
                                        <span>08</span>
                                        <p>Aug</p>
                                    </div>
                                    <div className="hero__inside__item--text">
                                        <ul className="label">
                                            <li>Vegan</li>
                                            <li>Desserts</li>
                                        </ul>
                                        <h5>How to Make a Milkshake With Any <br />Ice Cream, Any Toppings...</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="hero__inside__item hero__inside__item--small set-bg"
                                data-setbg="/hero/hero-2.jpg">
                                <div className="hero__inside__item__text">
                                    <div className="hero__inside__item--meta">
                                        <span>08</span>
                                        <p>Aug</p>
                                    </div>
                                    <div className="hero__inside__item--text">
                                        <ul className="label">
                                            <li>Vegan</li>
                                            <li>Desserts</li>
                                        </ul>
                                        <h5>Vintage Copper Preserve Pan with <br />Brass Handles, Mid 19th Century</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className="hero__inside__item set-bg" data-setbg="/hero/hero-4.jpg">
                                <div className="hero__inside__item__text">
                                    <div className="hero__inside__item--meta">
                                        <span>08</span>
                                        <p>Aug</p>
                                    </div>
                                    <div className="hero__inside__item--text">
                                        <ul className="label">
                                            <li>Vegan</li>
                                            <li>Desserts</li>
                                        </ul>
                                        <h5>Marinated Lentil Salad with Zucch <br />ini and Tomatoes</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </OwlCarousel>
    </section>
  );
}

export default MainSlider;