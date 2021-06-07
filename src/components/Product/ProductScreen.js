import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../Api/Apifind";
import { Context } from "../../ContextProvider";
import "./ProductScreen.css";

function ProductScreen(props) {
  const [stateFind, setStateFind] = useState();
  const [disabled, setDisabled] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const context = useContext(Context);
  const { cart, setCart } = context;
  var cartNumero = context.cartNum;

  const id = props.match.params.id;

  const AddTocart = () => {
    setDisabled(true);
    setCart([...cart, { id, quantity }]);
  };

  const onSelect = (event) => {
    setQuantity(event.target.value);
  };

  const ActiveFunction = async () => {
    var result = await data(props.match.params.id);
    const CB = JSON.parse(result);

    var bob = CB.Table
    var nameTable = bob[0]
    
    setStateFind(nameTable)
  };

  React.useEffect(() => {
    ActiveFunction();
  }, []);

  return (
    <div className="cardtot">
        <div className="back-to-result">
          <Link to="/product"> Back to result</Link>
        </div>
      <div className="details">
        <div className="details-image">
          <img src={stateFind && stateFind.image} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{stateFind && stateFind.name}</h4>
            </li>

            <li>
              {stateFind && stateFind.rating} Etoiles ( //{" "}
              {stateFind && stateFind.numReviews})
            </li>

            <li>
              <b>
                Price: <b>$ {stateFind && stateFind.prix}</b>
              </b>
            </li>

            <li>
              <b>Description:</b>

              <br />
              <br />
              <div>{stateFind && stateFind.description}</div>
            </li>
            <li>
              <div>
                <b>Couleur affichée : </b>
                {stateFind && stateFind.couleur}
              </div>
            </li>
          </ul>
        </div>
        <div className="details-action"> 
        <ul>
             <li>
             Price:<b>$ {stateFind && stateFind.prix}</b>
             </li>

             <li>
              Quantité:{" "}
              <select onChange={onSelect}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </li>

            {/* <li>
              <button disabled={disabled} onClick={AddTocart()}>
                {" "}
                Add to Cart
              </button>
            </li> */}


        </ul>
        
        </div>





      </div>
    </div>

    // <div className="cardtot">
    //   <div className="details">
    //     <div className="details-image">
    //       <img src={stateFind && stateFind.image} alt="product" />
    //     </div>
    //     <div className="details-info">
    //       <ul>
    //         <li>
    //           <h4>{stateFind && stateFind.name}</h4>
    //         </li>
    //         <li>
    //           {stateFind && stateFind.rating} Etoiles (
    //           {stateFind && stateFind.numReviews})
    //         </li>
    //         <li>
    //           <b>
    //             Price: <b>$ {stateFind && stateFind.prix}</b>
    //           </b>
    //         </li>
    //         <li>
    //           <b>Description:</b>
    //           <br />
    //           <br />
    //           <div>{stateFind && stateFind.description}</div>
    //         </li>
    //         <li>
    //           <div>
    //             <b>Couleur affichée : </b>
    //             {stateFind && stateFind.couleur}
    //           </div>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="details-action">
    //       <ul>
    //         <li>
    //           Price:<b>$ {stateFind && stateFind.prix}</b>
    //         </li>

            // <li>
            //   Quantité:{" "}
            //   <select onChange={onSelect}>
            //     <option value={1}>1</option>
            //     <option value={2}>2</option>
            //     <option value={3}>3</option>
            //     <option value={4}>4</option>
            //   </select>
            // </li>

            // <li>
            //   <button disabled={disabled} onClick={AddToCart()}>
            //     {" "}
            //     Add to Cart
            //   </button>
            // </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProductScreen;
