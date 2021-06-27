import React, { useState, useEffect, useContext } from "react";
import Particles from "react-particles-js";
import { Context } from "../../ContextProvider";
import "./login.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../components/firebase";

const Identification = (props) => {
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [btn, setBtn] = useState(false);

  const context = useContext(Context);



  useEffect(() => {
    if (password.length > 5 && email !== "") {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [password, btn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .loginUser(email, password)
      .then((user) => {
          console.log(user)
        setEmail("");
        setPassword("");
        props.history.push("/");
        context.setName(user.user.email);
        context.setIslog(true);
      })
      .catch((error) => {
        setError(error) ;
        setEmail("");
        setPassword("");

      });
  };
  return (

    <> 
    
    
    <div className="loginBox">
      <div className="slContainer">
        <div className="divtt" id="welcome">
          <div className="containerr">
            <form onSubmit={handleSubmit}>
              <div className="headtext">

                  { error !== '' && <span> { error.message} </span>}
                <h2> Connexion </h2>
              </div>

              <div className="m-group">
                <label htmlFor="email"> Email </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  required
                />
              </div>

              <div className="m-group ">
                <label htmlFor="password">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  autoComplete="off"
                  required
                />
              </div>

              {btn ? (
                <button> Connexion</button>
              ) : (
                <button disabled> Connexion</button>
              )}
            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/register">
                Pas de compte? Inscris toi !!!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <Particles
        id="particles-js"
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 500,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 3,
              out_mode: "out",
            },
            shape: {
              type: ["image"],
              image: [
                {
                  src: "/images/images1.gif",
                  height: 205,
                  width: 330,
                },
                {
                  src: "/images/images2.gif",
                  height: 205,
                  width: 330,
                },
                {
                  src: "/images/images3.gif",
                  height: 207,
                  width: 329,
                },
                {
                  src: "/images/images4.gif",
                  height: 207,
                  width: 329,
                },
                {
                  src: "/images/images5.gif",
                  height: 205,
                  width: 330,
                },
                {
                  src: "/images/images6.gif",
                  height: 205,
                  width: 330,
                },
                {
                  src: "/images/images7.gif",
                  height: 207,
                  width: 329,
                },
                {
                  src: "/images/images8.gif",
                  height: 207,
                  width: 329,
                },
                {
                  src: "/images/images9.gif",
                  height: 207,
                  width: 329,
                },
                {
                  src: "/images/images10.gif",
                  height: 207,
                  width: 329,
                },
                {
                  src: "/images/images11.gif",
                  height: 207,
                  width: 329,
                },
                {
                  src: "/images/images12.gif",
                  height: 207,
                  width: 329,
                },
              ],
            },
            color: {
              value: "#f0f7ff",
            },
            size: {
              value: 70,
              random: false,
              anim: {
                enable: true,
                speed: 3,
                size_min: 5,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
    </>
  );
};

export default Identification;
