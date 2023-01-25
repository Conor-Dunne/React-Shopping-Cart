import React from "react";
import { Link } from "react-router-dom";


export default function Home () {
    return (
        <main className="home">
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "80%",
                margin: "320px auto",
            }}
            >
            <h1 style={{
                color: "white",
                fontSize: "clamp(1.5rem, 6vw, 7rem)",
                textShadow: "#767575 0px 0px 20px",
            }}>Welcome to our store!</h1>
            <Link to="/store">
            <button className="shop-btn">Shop Now</button>
            </Link>
            </div>
        </main>
    )
}