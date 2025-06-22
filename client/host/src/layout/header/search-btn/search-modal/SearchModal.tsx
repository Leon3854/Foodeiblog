import { useEffect, useRef } from "react";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  searchQuery: string;
  handleSearch: (query: string) => void;
}

export default function SearchModal({
  isVisible,
  onClose,
  searchQuery,
  handleSearch,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Автофокус при открытии
  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`search-model ${isVisible ? "search-model--active" : ""}`}
      >
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch" onClick={onClose}>
            +
          </div>
          <form
            className="search-model-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              ref={inputRef}
              type="text"
              id="search-input"
              placeholder="Search here....."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </form>
        </div>
      </div>
      {/* Search End */}
    </>
  );
}
