import React from "react";
import { Link } from "react-router-dom";


export default function Home () {
    return (
        <main className="home">
            <div
            style={{
                height: "100vh",
                backgroundColor: "rgb(0 0 0 / 58%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px"
            }}
            >
            <h1 style={{
                color: "white",
                fontSize: "clamp(1.5rem, 6vw, 5rem)",
                fontWeight: "400",
            }}>Welcome to our store!</h1>
            <Link to="/store">
            <button className="shop-btn">Shop Now</button>
            </Link>
            </div>
        </main>
    )
}