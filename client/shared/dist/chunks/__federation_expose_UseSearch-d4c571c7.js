import { importShared } from './__federation_fn_import-4a69d5a8.js';

const {useCallback,useEffect,useState} = await importShared('react');

const useSearch = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const openModal = useCallback(() => {
    setIsVisible(true);
    document.body.style.overflow = "hidden";
  }, []);
  const closeModal = useCallback(() => {
    setIsVisible(false);
    setSearchQuery("");
  }, []);
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape")
        closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);
  return {
    isVisible,
    searchQuery,
    openModal,
    closeModal,
    handleSearch
  };
};

export { useSearch };
