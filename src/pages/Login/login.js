import React, { useState } from "react";
// import LogoBootstrap from './bootstrap-solid.svg'

import { Redirect } from "react-router-dom";

import { Context } from "../../ContextProvider";
import "./login.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";





var request = require("request");

function LoginCB(Email, password) {
  return new Promise(function (resolve, reject) {
    request(
      {
        method: "POST",
        url: "https://jquery-a7b1ae.appdrag.site/api/login",
        form: {
          Email: Email,
          password: password,
          AD_PageNbr: "1",
          AD_PageSize: "500",
        },
      },
      function (err, httpResponse, body) {
        if (err != null) {
          resolve(err);
        } else {
          resolve(body);
        }
      }
    );
  });
}
// var result = await loginCB();
// console.log(result);

const Identification = () => {
  const context = React.useContext(Context);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [Data, setData] = useState("");
  const { t } = useTranslation();
  // let { path, url } = useRouteMatch();
  // let { id, name } = useParams();

  const onChangeUsername = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const [password, setPassword] = useState("");

  const onChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
    setError(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const userCredentials = await LoginCB(username, password);

    if (!userCredentials) {
      setError(true);
    } else {

      
      
      const data = await LoginCB(username, password);
      const datajson = JSON.parse(data).Table[0];
    
      
      

    if (datajson !== undefined) {

      context.setIslog(true)
      context.setName(datajson.firstName);
      setLoggedIn(true)
    }
    else{

      setError(true)

    }






    }

    console.log("userCredentials", userCredentials);
  };

  if (loggedIn) {
    context.setIslog(true);
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div className="okok ">
        <div className="okokok">
          <form className="form-signinn">
            <h1 className="HeaderSignin">{t("Please sign in.1")}</h1>

            <h1 className="inputUsername">{t("Identifiant.7")}</h1>
            <input
              type="text"
              id="inputUsername"
              className="emailtext"
              onChange={onChangeUsername}
              value={username}
              placeholder="Username"
              required
              autofocus
            />

            <h1 className="inputPassword">{t("Password.3")}</h1>
            <input
              type="password"
              id="inputPassword"
              className="passwordinput"
              value={password}
              onChange={onChangePassword}
              placeholder="Password"
              required
            />

            {error && <div className='errorpassword'>Mauvais mot de passe</div>}
            <div className="checkbox">
              <h3>
               
                {t("Remember me.4")}
              </h3>
              <input type="checkbox" value="remember-me" />
            </div>
            <button
              className="btn"
              type="submit"
              onClick={onSubmit}
              disabled={password === ""}
            >
              <h5> {t("Sign in.5")}</h5>
            </button>
            <h6>
              {" "}
              <p className="date">&copy; 2017-2021</p>
            </h6>
          </form>
        </div>
      </div>






      <div>   <Link to={"/register"}>TEST SINSCRIRE </Link>  </div>

    </div>




  );
};

export default Identification;
