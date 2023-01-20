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
          const response = await axios.get('https://dummyjson.com/products');
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
      <div>
        {isLoading ? <p>Loading...</p> : (
          error ? <p>{error.message}</p> : (
            isDataLoaded ? data.map(item => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <img src={item.images[0]} alt="Girl in a jacket" width="500" height="600"></img>
              </div>
            )) : <p>No data available</p>
          )
        )}
      </div>
    );
  }

// https://dummyjson.com/products

