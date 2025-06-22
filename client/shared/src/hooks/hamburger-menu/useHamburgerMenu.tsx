import { useEffect, useCallback, useState } from "react";

export type HamburgerMenuType = {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

const SELECTORS = {
  wrapper: ".humberger__menu__wrapper",
  overlay: ".humberger__menu__overlay",
  openBtn: ".humberger__open",
} as const;

export const useHamburgerMenu = (): HamburgerMenuType => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback((shouldOpen: boolean) => {
    const wrapper = document.querySelector<HTMLElement>(SELECTORS.wrapper);
    const overlay = document.querySelector<HTMLElement>(SELECTORS.overlay);

    wrapper?.classList.toggle("show__humberger__menu__wrapper", shouldOpen);
    overlay?.classList.toggle("active", shouldOpen);
    setIsMenuOpen(shouldOpen);
  }, []);

  const openMenu = useCallback(() => toggleMenu(true), [toggleMenu]);
  const closeMenu = useCallback(() => toggleMenu(false), [toggleMenu]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    const openBtn = document.querySelector<HTMLElement>(SELECTORS.openBtn);
    const overlay = document.querySelector<HTMLElement>(SELECTORS.overlay);

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
