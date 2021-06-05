import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../data";
import { Context } from "../../ContextProvider";
import "./ProductScreen.css";

function ProductScreen(props) {
  const id = props.match.params.id;

  const context = useContext(Context);
  const { cart, setCart } = context;

  const [disabled, setDisabled] = useState(false);
  const [quantity, setQuantity] = useState();
  const [size, setSize] = useState();
  
  useEffect(() => {
    const found = cart.find((item) => item.id === id);
    console.log(found);
    if (found) {
      setDisabled(true);
    }
  }, []);

  const addToCart = () => {
    setDisabled(true);
    setCart([...cart, { id, quantity, size }]);
  };
  const onSelect = (event) => {
    setQuantity(event.target.value);
  };

  const onSelectSize = (event) => {
    console.log(size);
    setSize(event.target.value);
  };

  
  const product = data.products.find((x) => x._id === props.match.params.id);

  return (
    <div className="cardtot">
      <div className="back-to-result">
        <Link to="/products"> Back to result</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Etoiles ({product.numReviews})
            </li>
            <li>
              <b>
                Price: <b>$ {product.prix}</b>
              </b>
            </li>
            <li>
              <b>Description:</b>
              <br />
              <br />
              <div>{product.description}</div>
            </li>
            <li>
              <div>
                <b>Couleur affichée : </b>
                {product.couleur}
              </div>
            </li>
          </ul>
        </div>

        <div className="details-action">
          <ul>
            <li>
              Price:<b>$ {product.prix}</b>
            </li>

            <li>
              Quantité:{" "}
              <select onChange={onSelect}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                {/* <option value={3}>3</option>
                <option value={4}>4</option> */}
              </select>
            </li>

            <li>
              Size:{" "}
              <select onChange={onSelectSize}>
                <option value='35'>35</option>
                <option value='36'>36</option>
                <option value='37'>37</option>
                <option value='38'>38</option>
                <option value='39'>39</option>
                {/* <option value={40}>40</option>
                <option value={41}>41</option>
                <option value={42}>42</option>
                <option value={43}>43</option> */}
              </select>
            </li>

            <li>
              <button disabled={disabled} onClick={addToCart}>
                {" "}
                Add to Cart
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
