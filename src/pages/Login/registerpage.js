import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import { FirebaseContext } from "../../components/firebase";

import "./registerpage.css";

import Particles from "react-particles-js";

const SignUp = (props) => {

  const firebase = useContext(FirebaseContext);

  const data = {
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [loginData, setLoginData] = useState(data);

  const [error, setError] = useState("");
 

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    firebase
      .signupUser(email, password)
      .then((user) => {
        setLoginData({ ...data });
        props.history.push('/')
      })
      .catch((error) => {
        setError(error);
        setLoginData({ ...data });
      });
  };

  const { pseudo, email, password, confirmPassword } = loginData;

  const btn =
    pseudo === "" ||
    email === "" ||
    password === "" ||
    password !== confirmPassword ? (
      <button disabled> Inscription </button>
    ) : (
      <button> Inscription </button>
    );

  // gestion erreur

  const errorMsg = error !== "" && <span> {error.message}</span>;

  return (
    <>
      <div className="divtt" id="welcome">
        <div className="containerr">
          <form onSubmit={handleSubmit}>
            <div className="headtext">
            {errorMsg}
              <h2> INSCRIPTION </h2>
            </div>

            <div className="m-group">
              <label htmlFor="pseudo"> Pseudo </label>
              <input
                id="pseudo"
                type="text"
                onChange={handleChange}
                value={pseudo}
                autoComplete="off"
                required
              />
            </div>

            <div className="m-group">
              <label htmlFor="email"> Email </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="m-group ">
              <label htmlFor="password">Password</label>
              <input  onChange={handleChange}
                  value={password}
                  type="password"
                  id="password"
                  autoComplete="off"
                  required />
            </div>
            <div className="m-group ">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input  onChange={handleChange}
                  value={confirmPassword}
                  type="password"
                  id="confirmPassword"
                  autoComplete="off"
                  required />
            </div>
           
            {btn}
            
          </form>
          <div className="linkContainer"> 
          <Link className='simpleLink' to='/login'>Deja inscrit? Connectez-vous. </Link>
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
                value_area: 900,
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
                speed: 5,
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
}
export default SignUp