import { Link } from "react-router-dom";

export default function UnderMenu() {
  return (
    <>
      <ul className="dropdown__menu">
        <li>
          <Link to="./categories-grid.html">Categories Grid</Link>
        </li>
        <li>
          <Link to="./categories-list.html">Categories List</Link>
        </li>
        <li>
          <Link to="./single-post.html">Single Post</Link>
        </li>
        <li>
          <Link to="./signin.html">Sign In</Link>
        </li>
        <li>
          <Link to="./404.html">404</Link>
        </li>
        <li>
          <Link to="./typography.html">Typography</Link>
        </li>
      </ul>
    </>
  );
}
