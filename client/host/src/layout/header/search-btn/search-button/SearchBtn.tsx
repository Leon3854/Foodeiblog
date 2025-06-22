import { FaMagnifyingGlass } from "react-icons/fa6";

interface Props {
  onClick: () => void;
}

export default function SearchBtn({ onClick }: Props) {
  return (
    <>
      <div className="col-lg-2 col-md-1 col-6 order-md-3 order-2">
        <div className="header__search" onClick={onClick}>
          <i className="fa fa-search search-switch">
            <FaMagnifyingGlass />
          </i>
        </div>
      </div>
    </>
  );
}
