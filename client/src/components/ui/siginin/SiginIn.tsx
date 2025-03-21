import { Link } from "react-router-dom";

function SiginIn() {

	return(
		<>
		<div className="signin">
			<div className="signin__warp">
				<div className="signin__content">
					<div className="signin__logo">
						<Link to="#">
							<img src="/siign-in-logo.png" alt="sign-in-logo"/>
						</Link>
          </div>
          <p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt labore dolore magna aliqua 
						viverra.
					</p>
        	<div className="signin__form">
						<ul className="nav nav-tabs" role="tablist">
							<li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="false">
											Sign up
									</a>
							</li>
							<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">
											Sign in
									</a>
							</li>
							<li className="nav-item"></li>
						</ul>
						<div className="tab-content">
							<div className="tab-pane active" id="tabs-1" role="tabpanel">
									<div className="signin__form__text">
										<p>with your social network :</p>
										<div className="signin__form__signup__social">
												<Link to="#" className="facebook"><i className="fa fa-facebook"></i></Link>
												<Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link>
												<Link to="#" className="google"><i className="fa fa-google"></i></Link>
										</div>
										<div className="divide">or</div>
										<form action="#">
												<input type="text" placeholder="User Name*" />
												<input type="text" placeholder="Password" />
												<input type="text" placeholder="Confirm Password" />
												<input type="text" placeholder="Email Address" />
												<input type="text" placeholder="Full Name" />
												<label for="sign-agree-check">
														I agree to the terms & conditions
														<input type="checkbox" id="sign-agree-check"/>
														<span className="checkmark"></span>
												</label>
												<button type="submit" className="site-btn">Register Now</button>
										</form>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	)

}
export default SiginIn