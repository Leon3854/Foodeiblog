import Social from "../../../../shared/src/components/social/Social";
import { useSetBgImages } from "../../../../shared/src/hooks/set-bg-image/useSetBgImages";
import { FaHeart } from "react-icons/fa6";

export default function Footer() {
  useSetBgImages(".set-bg");

  // Массив для меню "Recipes" для избежания дублирования кода
  const instagramItems = [
    { id: 1, image: "images/temp/footer/ip-1.jpg" },
    { id: 2, image: "images/temp/footer/ip-2.jpg" },
    { id: 3, image: "images/temp/footer/ip-3.jpg" },
    { id: 4, image: "images/temp/footer/ip-4.jpg" },
    { id: 5, image: "images/temp/footer/ip-5.jpg" },
    { id: 6, image: "images/temp/footer/ip-6.jpg" },
  ];

  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="footer__instagram">
            <div className="footer__instagram__avatar">
              <div className="footer__instagram__avatar--pic">
                <img
                  src="/images/temp/footer/instagram-avatar.jpg"
                  alt="instagram-avatar"
                />
              </div>
              <div className="footer__instagram__avatar--text">
                <h5>@ foodieblog</h5>
                <span>23,7k follower</span>
              </div>
            </div>
            <div className="row">
              {instagramItems.map((item) => (
                <div key={item.id} className="col-lg-2 col-md-2 col-sm-4 col-6">
                  <div
                    className="footer__instagram__item set-bg"
                    data-setbg={item.image}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__text">
                <div className="footer__logo">
                  <a href="#">
                    <img src="/images/temp/logo.png" alt="logotip" />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                  <br /> labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra
                  <br /> maecenas accumsan lacus vel facilisis.{" "}
                </p>
                <div className="footer__social">
                  <Social />
                </div>
              </div>
              <div className="footer__copyright">
                <p>
                  {/* <!-- Link back to Colorlib can't be removed. 
													Template is licensed under CC BY 3.0. --> */}
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>
                  All rights reserved | This template is made with
                  <FaHeart /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
