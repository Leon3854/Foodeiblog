import { usePreloader } from '../../../../../shared/src/hooks/preloader/Preloader'; // Или правильный путь к вашим хукам

import './Preloader.component.css';

function Preloder() {
    usePreloader(); // Вызов хука

    return (
        <>
            <div id="preloder">
                <div className="loader"></div>
            </div>
        </>
    );
}

export default Preloder;
