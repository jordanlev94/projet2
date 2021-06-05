import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../pages/Products.css";
import styled from "styled-components";
import './ProductCard.css'

const ProductCard = (props) => {
  const { image, _id, name, marque, prix, numReviews, rating, onRemove } =
    props;
  return (
    <div>
      {onRemove && <div onClick={() => onRemove(_id)}>X</div>}
      <div className='cardtot'>
        <img className="product-image" src={image} alt="product" />
        <div className="product-name">
          <Link to={"/product/" + _id}> {name} </Link>
        </div>
        <div className="product-marque"> {marque}</div>
        <div className="product-prix">
          <b> {prix} $</b>
        </div>

        <br />
      </div>
    </div>
  );
};

export default ProductCard;
