import { GiHamburgerMenu } from "react-icons/gi"
import { useHamburgerMenu } from "../../../../../shared/src/hooks/hamburger-menu/useHamburgerMenu"

function HumbergerBtn () {
	const  {openMenu} = useHamburgerMenu()
	return(
		<>
		<div className="col-lg-2 col-md-1 col-6 order-md-1 order-1">
				<div className="header__humberger">
						<button className="humberger__open"
						onClick={openMenu}
						style={{ background: "none", border: "none", cursor: "pointer" }}
						>
							
							<GiHamburgerMenu />
							
						</button>
						
				</div>
		</div>
		</>
	)
}
export default HumbergerBtn