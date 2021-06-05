import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data";
import "./Products.css";
import styled from "styled-components";
import ProductCard from "../components/Product/ProductCard";


function Home() {
  const [starClicked, setStarClicked] = useState(false);

  const css = true ? "product" : "fwdf";


  
  return (


<li>
  {/* <div> <img src="../../../public/images/bann2.jpg" alt="lol" /> </div> */}
    <ul className="products">



      {data.products.map((product) => (
       
       
       <ProductCard 
          image={product.image}
          _id={product._id}
          name={product.name}
          marque={product.marque}
          prix={product.prix}
          size={product.size}
        
        />

      ))}
    </ul></li>
  );
}

export default Home;

////////////
