import React from "react";
import { Link } from "react-router-dom";


export default function Home () {
    return (
        <main className="home">
            <h1 style={{
                color: "white",
                fontSize: "clamp(1rem, 4rem, 7rem)",
                textShadow: "#767575 0px 0px 20px",
            }}>Welcome to our store!</h1>
            <Link to="/store">
            <button className="shop-btn">Shop Now</button>
            </Link>
        </main>
    )
}