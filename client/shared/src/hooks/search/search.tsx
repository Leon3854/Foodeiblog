import { useCallback, useEffect, useState } from "react";

// Экспортируем типы для хука
export interface SearchModalControlsTypes {
  isVisible: boolean;
  searchQuery: string;
  openModal: () => void;
  closeModal: () => void;
  handleSearch: (query: string) => void;
}

export type SearchStyleClasses = {
  toggleButton: string;
  modal: string;
  closeButton: string;
  input: string;
};

export const useSearch = (): SearchModalControlsTypes => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = useCallback(() => {
    setIsVisible(true);
    document.body.style.overflow = "hidden"; // Блокируем скролл
  }, []);

  const closeModal = useCallback(() => {
    setIsVisible(false);
    setSearchQuery("");
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    // Здесь может быть вызов API для поиска
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  return {
    isVisible,
    searchQuery,
    openModal,
    closeModal,
    handleSearch,
  };
};
