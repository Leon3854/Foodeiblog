import {useEffect} from 'react'

const useSetBgImages = (selector) => {
	useEffect(() => {
			const setBgImages = () => {
					const bgElements = document.querySelectorAll(selector);
					bgElements.forEach((element) => {
							const bg = element.getAttribute('data-setbg');
							element.style.backgroundImage = `url(${bg})`;
					});
			};

			setBgImages();
	}, [selector]); // Добавляем selector в зависимости, если он изменится
};

export default useSetBgImages

