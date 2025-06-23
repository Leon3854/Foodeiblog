import {useEffect} from 'react'

// Кастомный хук для установки фоновых изображений на элементы по заданному селектору
// Использует хук useEffect из React для выполнения эффекта при монтировании и при изменении селектора
const useSetBgImages = (selector) => {
	useEffect(() => {
			const setBgImages = () => {
				// Получаем все элементы, соответствующие селектору
					const bgElements = document.querySelectorAll(selector);
					
					// Для каждого элемента устанавливаем CSS-свойство backgroundImage
					// Значение берется из атрибута data-setbg
					bgElements.forEach((element) => {
							const bg = element.getAttribute('data-setbg');
							element.style.backgroundImage = `url(${bg})`;
					});
			};

			setBgImages();
	}, [selector]); // Запускаем эффект при изменении selector
};

export default useSetBgImages

