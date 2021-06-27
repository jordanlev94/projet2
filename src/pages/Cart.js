import React, { useState, useContext, useEffect } from "react";
import { Context } from "../ContextProvider";
import { Link } from "react-router-dom";
import './Cart.css'


const Cart = (props) => {
  const context = useContext(Context);
  const { cart, setCart } = context;
  const [newCart, setNewCart] = useState([]);
  const [sum, setSum] = useState(0);
  const [size, setSize] = useState(35);

  useEffect(() => {
    const cartElements = [];

    cart.forEach((cartItem) => {
      const contextProduct = context.contextProduct
      const found = contextProduct.find((item) => item.id == cartItem.id);
      cartElements.push({ ...found, quantity: cartItem.quantity });
    });
    setNewCart(cartElements);

    const sum = cartElements.reduce((total, item) => {
      return total + item.prix * item.quantity;
    }, 0);
    setSum(sum);
  }, [cart]);


  function Confirm(){
context.setCartcontext(newCart);
  }



  const onRemove = (id) => {
    const newCart = cart.filter(item => item.id != id);
    setCart(newCart);
    
  };

  return (
    <div>
      {newCart.map((product , index) => (
        
<div key={index} className="users text-dark row justify-content-center ">

<div className="col-md-5 m-3">

<div className="Card rounded-lg shadow-lg border text-center pl-4 pr-4 pb-2" >
<button className='buttoncss' onClick={() => onRemove(product.id)}>
remove
</button>
<br/>
<img src={product.image} alt="" style={{ height: "200px" }} />

<div className="h2">
{product.name}

</div>


<p>
{product.description}

</p>
<div className="lien">

</div>

<div className="lien">
price:
{product.prix}
</div>
</div>

</div>

</div>
))}
<div className="text-center ml-5 mt-5" >

Votre montant total s'élève à :
<h2 className="text-black"> $
{` ${sum}`}</h2>

<Link to ='/payment'> <button onClick={Confirm()} className='buttoncss'> PAY </button></Link>
</div>
</div>
)
        

};

export default Cart;
