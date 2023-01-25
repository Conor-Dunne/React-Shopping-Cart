import { Link } from "react-router-dom";
import { useParams } from "react-router";
import React, { useState } from "react";


export function Store({ products }) {
  return (
    <div className="grid">
      {products.map((item) => (
        <Link to={`/product/${item.id}`}>
          <article key={item.id}>
            <img
              src={item.thumbnail}
              alt="product"
              style={{
                maxWidth: "100%",
                maxHeight: "120px",
              }}
            ></img>
            <p>{item.title}</p>
            <h1
              style={{
                fontWeight: "800",
              }}
            >
              ${item.price}
            </h1>
          </article>
        </Link>
      ))}
    </div>
  );
}

export function ProductPage({ products, addToCart }) {
  let { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((obj) => obj.id === Number(id));

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "30px",
      padding: "10px 20px",
    }}
    >
      <h1
      style={{
        fontSize: "3rem",
        margin: "20px 0",
      }}
      >{product.title}</h1>
      <div           style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
>
      {product.images.map((ref) => (
        <img
          src={ref}
          alt="product"
          style={{
            maxWidth: "100%",
            height: "120px",
            borderRadius: "5px",
            boxShadow: "#ccbfbf 1px 1px 9px 2px",
          }}
        ></img>
           ))}
           </div>
           <p
          style={{
            fontSize: "1.5rem",
          }}
          >{product.description}</p>
          <h1>${product.price}</h1>
          <div style={{
            fontSize: "1.5rem",
          }}>
            <label htmlFor="quantity" >
              {`Qty: `} 
            </label>
            <select 
            name="quauntity" 
            id="quantity"
            onChange={(e) => setQuantity(e.target.value)}
            style={{
              fontSize: "inherit",
            }}
            >
              {quantityOptions()}
            </select>
          </div>
          <button 
          onClick={() => addToCart(product, quantity)}
          className="shop-btn">Add to cart</button>
    </div>
  );
}

export function addToCartConfirmation() {

}



const quantityOptions = function() {
  const options = []
  for (let i = 1; i < 30; i ++) {
      options.push(<option value={i}>{i}</option>)
  }
  return options;
}