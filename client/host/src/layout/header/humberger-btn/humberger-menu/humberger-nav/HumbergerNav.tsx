export default function HumbergerNav() {
  return (
    <>
      <nav className="humberger__menu__nav mobile-menu">
        <ul>
          <li>
            <a href="./index.html">Home</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">Dinner</a>
          </li>
          <li>
            <a href="#">Desserts</a>
          </li>
          <li className="dropdown">
            <a href="#">Pages</a>
            <ul className="dropdown__menu">
              <li>
                <a href="./categories-grid.html">Categories Grid</a>
              </li>
              <li>
                <a href="./categories-list.html">Categories List</a>
              </li>
              <li>
                <a href="./single-post.html">Single Post</a>
              </li>
              <li>
                <a href="./signin.html">Sign In</a>
              </li>
              <li>
                <a href="./404.html">404</a>
              </li>
              <li>
                <a href="./typography.html">Typography</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="./about.html">About</a>
          </li>
          <li>
            <a href="./contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
