import { useEffect } from 'react';

const usePreloader = () => {
    useEffect(() => {
        const handleLoad = () => {
            // создание констант
            const loader = document.querySelector('.loader');
            const preloader = document.getElementById('preloder');

            // если есть данный класс то добавляем еще один класс от
            if (loader) {
                loader.classList.add('fade-out'); // Добавляем класс для анимации
            }

            // если есть данный класс то тогда через метод добавляем класс и ситили
            if (preloader) {
                setTimeout(() => {
                    preloader.classList.add('fade-out'); // Добавляем класс для анимации
                    preloader.style.display = 'none'; // Скрываем прелоадер
                }, 500); // Время задержки должно соответствовать времени анимации
            }
        };

        // добавляем обработчик события
        window.addEventListener('load', handleLoad);

        // Убираем обработчик события при размонтировании компонента
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []); // Пустой массив зависимостей, чтобы хук сработал только один раз при монтировании
};

export default usePreloader;




// const usePreloader = () => {
//     useEffect(() => {
//         const handleLoad = () => {
//             const loader = document.querySelector('.loader');
//             const preloader = document.getElementById('preloder');

//             if (loader) {
//                 loader.style.display = 'block'; // Показываем лоадер перед анимацией
//                 loader.classList.add('fade-out'); // Добавляем класс для анимации
//             }

//             if (preloader) {
//                 setTimeout(() => {
//                     preloader.classList.add('fade-out'); // Добавляем класс для анимации
//                     preloader.style.display = 'none'; // Скрываем прелоадер
//                     if (loader) {
//                         loader.style.display = 'none'; // Скрываем лоадер
//                     }
//                 }, 500); // Время задержки должно соответствовать времени анимации
//             }
//         };

//         window.addEventListener('load', handleLoad);

//         // Убираем обработчик события при размонтировании компонента
//         return () => {
//             window.removeEventListener('load', handleLoad);
//         };
//     }, []); // Пустой массив зависимостей, чтобы хук сработал только один раз при монтировании
// };

// export default usePreloader;
