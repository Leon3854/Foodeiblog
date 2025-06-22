import { useEffect } from "react";

export type PreloaderElementsType = {
  loader: HTMLElement | null;
  preloader: HTMLElement | null;
};

export const usePreloader = () => {
  useEffect(() => {
    const getElements = (): PreloaderElementsType => ({
      loader: document.querySelector<HTMLElement>(".loader"),
      preloader: document.getElementById("preloder"),
    });

    const handleLoad = () => {
      const { loader, preloader } = getElements();
      const ANIMATION_DELAY = 500; // Лучше вынести в константу

      if (loader) {
        loader.classList.add("fade-out");
      }

      if (preloader) {
        setTimeout(() => {
          preloader.classList.add("fade-out");
          preloader.style.display = "none";
        }, ANIMATION_DELAY);
      }
    };

    // Добавляем обработчик
    window.addEventListener("load", handleLoad);

    // Если страница уже загружена (например, при переходе между страницами SPA)
    if (document.readyState === "complete") {
      handleLoad();
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
};
