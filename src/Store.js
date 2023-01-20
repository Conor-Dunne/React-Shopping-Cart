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
          <article key={item.id} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
            <img src={item.images[0]} alt="product"></img>
            <h4>{item.title}</h4>
          </article>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

// https://dummyjson.com/products
