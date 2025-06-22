import { importShared } from './__federation_fn_import-4a69d5a8.js';

const {useEffect} = await importShared('react');

const usePreloader = () => {
  useEffect(() => {
    const getElements = () => ({
      loader: document.querySelector(".loader"),
      preloader: document.getElementById("preloder")
    });
    const handleLoad = () => {
      const { loader, preloader } = getElements();
      const ANIMATION_DELAY = 500;
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
    window.addEventListener("load", handleLoad);
    if (document.readyState === "complete") {
      handleLoad();
    }
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
};

export { usePreloader };
