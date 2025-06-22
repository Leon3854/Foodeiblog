import { useEffect } from "react";

// Экспортируемые типы
export type BgImageElement = HTMLElement & {
  dataset: {
    setbg: string;
  };
};

export type SetBgImagesReturnType = {
  setBgImages: () => void;
  getElements: () => NodeListOf<BgImageElement>;
};

export const useSetBgImages = (selector: string): SetBgImagesReturnType => {
  const getElements = (): NodeListOf<BgImageElement> => {
    return document.querySelectorAll<BgImageElement>(selector);
  };

  const setBgImages = () => {
    try {
      const bgElements = getElements();

      bgElements.forEach((element) => {
        const bg = element.dataset.setbg;
        if (bg) {
          element.style.backgroundImage = `url(${bg})`;
        }
      });
    } catch (error) {
      console.error("Error setting background images:", error);
    }
  };

  useEffect(() => {
    // Вызываем сразу
    setBgImages();

    // На случай динамической загрузки контента
    const observer = new MutationObserver(setBgImages);
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [selector]);

  return {
    setBgImages,
    getElements,
  };
};
