import { importShared } from './__federation_fn_import-4a69d5a8.js';

const {useEffect} = await importShared('react');

const useSetBgImages = (selector) => {
  const getElements = () => {
    return document.querySelectorAll(selector);
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
    setBgImages();
    const observer = new MutationObserver(setBgImages);
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true
    });
    return () => {
      observer.disconnect();
    };
  }, [selector]);
  return {
    setBgImages,
    getElements
  };
};

export { useSetBgImages };
