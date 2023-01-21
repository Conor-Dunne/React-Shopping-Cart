import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div id="logo">
        <h1>GoStore</h1>
      </div>
      <ul>
        <li  className="contrast">
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/store">STORE</Link>
        </li>
        <li>
          <Link to="/cart">CART</Link>
        </li>
      </ul>
    </nav>
  );
}
