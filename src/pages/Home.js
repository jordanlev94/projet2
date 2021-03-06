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
                  "??quip??e de la m??me technologie Tuned Air que ses a??n??es, la Nike Air Max Plus 3 revisite un style embl??matique avec des ??l??ments en TPU fusionn??s sur l'empeigne, tout en rendant hommage au d??grad?? de couleurs intemporel du mod??le d'origine"
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
                  "Repr??sentez votre passion pour la marque dans un style l??gendaire. La Nike Air Force 1 Low revisite les ??l??ments les plus remarquables du mod??le original le cuir impeccable, les touches de couleurs vives et juste ce qu'il faut d?????clat pour vous faire briller. L'inscription ?? Just Do It ?? inspir??e du street-art vous invite ?? repousser vos limites.10"
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
                  "C??l??bre pour son jeu ultra-performant, LeBron a besoin d'une structure l??g??re mais robuste pour canaliser et guider sa puissance. La LeBron 18 Low reprend le syst??me d'amorti de la 17 pour offrir le parfait alliage entre confort, absorption des chocs et r??activit??. L'empeigne associe des mati??res l??g??res, des renforts sans coutures et un talon structur?? pour garantir un maintien total du pied sans sacrifier la mobilit?? des chevilles"
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
