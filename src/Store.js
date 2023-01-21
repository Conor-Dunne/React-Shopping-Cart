import React, { useState, useEffect } from "react";
import axios from "axios";
import { json } from "react-router-dom";

export default function Store() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setData(response.data.products);
        setIsLoading(false);
        setIsDataLoaded(true);
        console.log(response.data.products);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : isDataLoaded ? (
        data.map((item) => (
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
            <h1 style={{
              fontWeight: "800",
            }}>${item.price}</h1>
          </article>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

// https://dummyjson.com/products
