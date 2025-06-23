import { useEffect } from 'react';

const useHamburgerMenu = () => {
    useEffect(() => {
        // Создание констант
        const hamburgerOpen = document.querySelector(".humberger__open");
        const hamburgerMenuWrapper = document.querySelector(".humberger__menu__wrapper");
        const hamburgerMenuOverlay = document.querySelector(".humberger__menu__overlay");

        
        const openMenu = () => {
            // тут добавляем классы
            if (hamburgerMenuWrapper) {
                hamburgerMenuWrapper.classList.add("show__humberger__menu__wrapper");
            }
            // если есть данная константа добваляем класс active
            if (hamburgerMenuOverlay) {
                hamburgerMenuOverlay.classList.add('active');
            }
        };

        const closeMenu = () => {
            // тут удалеяем классы
            if (hamburgerMenuWrapper) {
                hamburgerMenuWrapper.classList.remove("show__humberger__menu__wrapper");
            }
            if (hamburgerMenuOverlay) {
                hamburgerMenuOverlay.classList.remove('active');
            }
        };

        // через опциональную цепочку обрабтываем событие открытие меню и закрытия
        hamburgerOpen?.addEventListener('click', openMenu);
        hamburgerMenuOverlay?.addEventListener('click', closeMenu);

        // Убираем обработчики событий при размонтировании компонента через ту же опциональную цепочку
        return () => {
            hamburgerOpen?.removeEventListener('click', openMenu);
            hamburgerMenuOverlay?.removeEventListener('click', closeMenu);
        };
    }, []); // Пустой массив зависимостей, чтобы хук сработал только один раз при монтировании
};

export default useHamburgerMenu;
