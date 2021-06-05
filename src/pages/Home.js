import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Particles from "react-particles-js";
import { Context } from "../ContextProvider";
import "./Home.css";
import Slide from "../components/Slide/Slide";

function Home() {
  const { t } = useTranslation();
  const context = useContext(Context);
  console.log(context.name);

  function functiondeco(params) {
    context.setIslog(false);
  }

  return (
    <div className="home">
      <h3>{t("Bonjour a tous merci de votre visite bienvenue.1")}</h3>

      

      <h3>{t("Shalom les gens test traduction")}</h3>
      <br />

      <br />
      {context.islog && (
        <button onClick={functiondeco}>
          {" "}
          Boutton pour se deconnecter depuis le home test{" "}
        </button>
      )}

      <br />
    
      <b>
        {" "}
        <div className="Text1home">
          {t("Bienvenue sur mon projet pas fini.3")}

        <b>  {context.name && context.islog && <div className='NameID'> <h1>{context.name}</h1> </div>}</b>
          <br />
          {t(
            "En theorie il devrait y avoir un register mais le plan a echouer du coup pour ce login.4"
          )}
          : <br /><br />

         <div className='mdp1'>meirsabbah@gmail.com // 12345</div> 
          <br />
          <div className='mdp2'> perrinmaximpac@gmail.com // 12345</div> 
          <br />
          <div className='mdp3'> webschool@gmail.com // 1234 </div> 
          <br />





          ___
          <br />
          <br />
          <div>
          {t(
           "La page reports qui se trouvant dans le burger en haut a gauche est un test")}
          </div>
        </div>
      </b>

      <div className="divslide">
        <Slide />
      </div>
    </div>
  );
}

export default Home;
