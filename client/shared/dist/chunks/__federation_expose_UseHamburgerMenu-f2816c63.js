import { importShared } from './__federation_fn_import-4a69d5a8.js';

const {useEffect,useCallback,useState} = await importShared('react');

const SELECTORS = {
  wrapper: ".humberger__menu__wrapper",
  overlay: ".humberger__menu__overlay",
  openBtn: ".humberger__open"
};
const useHamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback((shouldOpen) => {
    const wrapper = document.querySelector(SELECTORS.wrapper);
    const overlay = document.querySelector(SELECTORS.overlay);
    wrapper?.classList.toggle("show__humberger__menu__wrapper", shouldOpen);
    overlay?.classList.toggle("active", shouldOpen);
    setIsMenuOpen(shouldOpen);
  }, []);
  const openMenu = useCallback(() => toggleMenu(true), [toggleMenu]);
  const closeMenu = useCallback(() => toggleMenu(false), [toggleMenu]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape")
        closeMenu();
    };
    const openBtn = document.querySelector(SELECTORS.openBtn);
    const overlay = document.querySelector(SELECTORS.overlay);
    openBtn?.addEventListener("click", openMenu);
    overlay?.addEventListener("click", closeMenu);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      openBtn?.removeEventListener("click", openMenu);
      overlay?.removeEventListener("click", closeMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu, closeMenu]);
  return { isMenuOpen, openMenu, closeMenu };
};

export { useHamburgerMenu };
