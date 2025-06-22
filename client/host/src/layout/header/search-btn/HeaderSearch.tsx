import SearchBtn from "./search-button/SearchBtn";
import SearchModal from "./search-modal/SearchModal";
import { useSearch } from "../../../../../shared/src/hooks/search/search";

export default function HeaderSearch() {
  const { isVisible, searchQuery, openModal, closeModal, handleSearch } =
    useSearch();
  return (
    <>
      <SearchBtn onClick={openModal} />
      <SearchModal
        isVisible={isVisible}
        onClose={closeModal}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />
    </>
  );
}
