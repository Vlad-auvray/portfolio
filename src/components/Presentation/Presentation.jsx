import React from "react";
import "./Presentation.css";
import { Link } from "react-router-dom";

function Presentation() {
    return(

    <div className="presentation"> 
    <img className="profil" src={require('../../assets/img/profil.webp')} alt="Profil" />
    <div className="presentation-text"><p>Bonjour et bienvenue sur mon portfolio ! Vous trouverez ci-dessous la liste des projets de développement réalisés. <br></br>
    Vous souhaitez en savoir plus sur moi ? N'hésitez pas à suivre le lien <Link to="/more"> Supplément Chantilly </Link> ! </p>
    </div>
    </div>
);
}

export default Presentation;