import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div id="logo">
        <h1>GoStore</h1>
      </div>
      <ul>
        <li  className="contrast">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
