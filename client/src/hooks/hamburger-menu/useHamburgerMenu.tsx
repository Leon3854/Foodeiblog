import { useEffect } from 'react';

const useHamburgerMenu = () => {
    useEffect(() => {
        const hamburgerOpen = document.querySelector(".humberger__open");
        const hamburgerMenuWrapper = document.querySelector(".humberger__menu__wrapper");
        const hamburgerMenuOverlay = document.querySelector(".humberger__menu__overlay");

        const openMenu = () => {
            if (hamburgerMenuWrapper) {
                hamburgerMenuWrapper.classList.add("show__humberger__menu__wrapper");
            }
            if (hamburgerMenuOverlay) {
                hamburgerMenuOverlay.classList.add('active');
            }
        };

        const closeMenu = () => {
            if (hamburgerMenuWrapper) {
                hamburgerMenuWrapper.classList.remove("show__humberger__menu__wrapper");
            }
            if (hamburgerMenuOverlay) {
                hamburgerMenuOverlay.classList.remove('active');
            }
        };

        hamburgerOpen?.addEventListener('click', openMenu);
        hamburgerMenuOverlay?.addEventListener('click', closeMenu);

        // Убираем обработчики событий при размонтировании компонента
        return () => {
            hamburgerOpen?.removeEventListener('click', openMenu);
            hamburgerMenuOverlay?.removeEventListener('click', closeMenu);
        };
    }, []); // Пустой массив зависимостей, чтобы хук сработал только один раз при монтировании
};

export default useHamburgerMenu;
