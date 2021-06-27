import React from 'react'
import StripeContainer from '../components/Stripe/StripeContainer';
import { useState } from 'react';
import { Context } from '../ContextProvider'
import './PaymentPage.css'
import { Link } from 'react-router-dom'

function PaymentPage() {
    const [showItem, setShowItem] = useState(false);
    const context = React.useContext(Context);
    const total = context.sum
    const cartcontext = context.cartcontext


    return (
    <div className="App">

<div className="back-to-result">
          <Link to="/cart"> Back to CART </Link>
        </div>

    <h1>PAYEMENT PAGE BRO</h1>
    {showItem ? <StripeContainer/> : <> <p> TOTAL : </p> <h3> ${total}</h3>    

   { cartcontext.map(( product, index ) => (
     <div key={index} className="users text-dark row justify-content-center ">

     <div className="col-md-5 m-3">
     
     <div className="Card rounded-lg shadow-lg border text-center pl-4 pr-4 pb-2" >
    
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
     
  
     </div>
     
     </div>
     
     </div>  
   )
        
   )}


    <button className='buttoncss' onClick={() => setShowItem(true)}> Purchase ORDER</button></>}
    </div>
    );
}

export default PaymentPage
