import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Particles from "react-particles-js";
import { Context } from "../ContextProvider";
import "./Home.css";
import Slide from "../components/Slide/Slide";
import Logout from '../components/Logout/index'
import img1 from "./assetshome/1.jpg";
import img2 from "./assetshome/3.jpg";
import img3 from "./assetshome/4.jpg";

function Home() {
  const { t } = useTranslation();
  const context = useContext(Context);
  

  function functiondeco(params) {
    context.setIslog(false);
  }

  return (

    <>
    
    <div className="home" >
      <div className="texthom">
        {/* <h3>{t("Shalom les gens test traduction")}</h3> */}
      </div>
      <br />

      <br />
      {/* {context.islog && (
        <button onClick={functiondeco}>
          {" "}
          Boutton pour se deconnecter depuis le home test{" "}
        </button>
      )} */}
    

      <br />
      <br />
      <br />
      <br />
      <b>
        {" "}
        <div className="Text1home">
          {t("Bienvenue sur mon projet pas fini.3")}
          <b>
            {" "}
            {context.name && context.islog && (
              <div className="NameID">
                {" "}
                <h1>{context.name}</h1>{" "}
              </div>

              
            )}

<Logout/>
          </b>
          <br />
        
    
          <br />
          <br />
          <div>
            {t(
              "La page reports qui se trouvant dans le burger en haut a gauche est un test"
            )}
            <br />
            ___
          </div>
        </div>
      </b>

      <div className="containerflex">
        <div className="heading">
          <h1>PRODUITS</h1>
        </div>
        <div className="row  border-danger border">
          <div className="card  ">
            <div className="card-header">
              <figure>
                <img className="img1" src={img1} alt="" />{" "}
              </figure>
            </div>
            <div className="card-body">
              <p>
                {t(
                  "Équipée de la même technologie Tuned Air que ses aînées, la Nike Air Max Plus 3 revisite un style emblématique avec des éléments en TPU fusionnés sur l'empeigne, tout en rendant hommage au dégradé de couleurs intemporel du modèle d'origine"
                )}
              </p>
              <a href="/product/1" className="btngoto">
                GO TO
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <figure>
                <img className="img1" src={img2} alt="" />{" "}
              </figure>
            </div>
            <div className="card-body">
              <p>
                {t(
                  "Représentez votre passion pour la marque dans un style légendaire. La Nike Air Force 1 Low revisite les éléments les plus remarquables du modèle original le cuir impeccable, les touches de couleurs vives et juste ce qu'il faut d’éclat pour vous faire briller. L'inscription « Just Do It » inspirée du street-art vous invite à repousser vos limites.10"
                )}
              </p>
              <a href="/products/3" className="btngoto">
                GO TO
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <figure>
                <img className="img1" src={img3} alt="" />{" "}
              </figure>
            </div>
            <div className="card-body">
              <p>
                {t(
                  "Célèbre pour son jeu ultra-performant, LeBron a besoin d'une structure légère mais robuste pour canaliser et guider sa puissance. La LeBron 18 Low reprend le système d'amorti de la 17 pour offrir le parfait alliage entre confort, absorption des chocs et réactivité. L'empeigne associe des matières légères, des renforts sans coutures et un talon structuré pour garantir un maintien total du pied sans sacrifier la mobilité des chevilles"
                )}
              </p>
              <a href="/products/6" className="btngoto">
                GO TO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="divslide">
        <Slide />
      </div>

      <div className="Text1home"> ___________________ </div>
    </div>


    </>
  );
}

export default Home;
