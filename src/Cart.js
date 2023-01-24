import React from "react";

export default function Cart({ cart, total, noOfItems }) {
  return (
    <>
      <div
        className="grid"
        style={{
          maxWidth: "300px",
          margin: "30px auto",
        }}
      >
        {cart.map((order) => (
          <article
          style={{
            width: "200px",
            height: "auto",
          }}
          >
            <h1>{order.title}</h1>
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "50px",
              }}
              src={order.thumbnail}
              alt={order.title}
            />
            <h1>${order.price}</h1>
            <h2>Qty: {order.quantity}</h2>
          </article>
        ))}
        <h1>Order Total {`: ${noOfItems} item(s)`}: ${total}</h1>
        <button
         className="shop-btn"
         style={{
            backgroundColor: "#1340a9",
            display: cart.length < 1 ? "none" : "block",
         }}
         >Complete purchase</button>
      </div>
    </>
  );
}

