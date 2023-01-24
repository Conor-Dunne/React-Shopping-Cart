import { Link } from "react-router-dom";

export default function Nav({cart}) {
  return (
    <nav>
      <div id="logo">
        <h1>
          GoStore<div id="icon"></div>
        </h1>
      </div>
      <ul>
        <li className="contrast">
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/store">STORE</Link>
        </li>
        <li style={{
          position: "relative",
        }}>
          <Link to="/cart">CART</Link>
          <div
            style={{
              backgroundColor: "red",
              borderRadius: "1029px",
              display: cart.length < 1 ? "none" : "flex",
              fontSize: "0.7rem",
              width: "20px",
              height: "20px",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "-10px",
              left: "50px",
            }}
          >
            {cart.length}
          </div>
        </li>
      </ul>
    </nav>
  );
}
