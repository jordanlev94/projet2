import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../Api/Api";
import "./Products.css";
import { Context } from "../ContextProvider";

function Home() {
  const [starClicked, setStarClicked] = useState(false);
  const [find, setFind] = useState([]);
  const context = React.useContext(Context);
  const ActiveFunction = async () => {
    var result = await data();
    const CB = JSON.parse(result);
    var maptable = CB.Table;
    console.log(maptable[0])
    setFind(maptable);
    context.setContextProduct(CB.Table);
  };

  React.useEffect(() => {
    ActiveFunction();
  }, []);

  return (
    <li>
      <div className="products">
        {find.map((table) => (
          <div>
            <div className="cardtot">
              <img className="product-image" src={table.image} alt="product" />
              <div className="product-name">
                <Link to={"/products/" + table.id}> {table.name} </Link>
              </div>
              <div className="product-marque"> {table.marque}</div>
              <div className="product-prix">
                <b> {table.prix} $</b>
              </div>

              <br />
            </div>
          </div>
        ))}
      </div>
    </li>
  );
}

export default Home;

////////////
