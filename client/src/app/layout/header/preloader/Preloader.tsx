import usePreloader from "../../../../hooks/preloader/Preloader"
import "./Preloader.component.css"

function Preloader() {

	usePreloader();

	return(
		<>
		<div id="preloder" className="preloader">
			<div className="loader"></div>
		</div>
		</>
	)

}

export default Preloader