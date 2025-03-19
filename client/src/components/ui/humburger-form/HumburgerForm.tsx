function HumburgerForm () {
	return(
		<>
		<form>
				<input type="text" className="email-input" placeholder="Your email"/>
				<label for="agree-check">
						I agree to the terms & conditions
						<input type="checkbox" id="agree-check" />
						<span className="checkmark"></span>
				</label>
				<button type="submit" className="site-btn">Subscribe</button>
		</form>
		</>
	)
}

export default HumburgerForm