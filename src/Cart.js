import React from "react";

export default function Cart ({cart}) {

    return (
        <div>
            {cart.map(order =>
                <h1>{order.title}</h1>
                )}
        </div>
    )
    
}