import React, { useState } from "react";
import "./Dropdown.css";
import fleche from "../../assets/img/main.webp";
import { ExternalLink } from "react-external-link";
 
function Dropdown({titre, description, link}) {
    /* Crée un Hook d'état */
    const [ouvert, setOuvert] = useState(false);

    return(
        <div className="dropdown" id={`dropdown-${titre}`}>
            <div className="header-dropdown">
                <div className="titre-dropdown">{titre}</div>
                <span className={`fleche-dropdown ${ouvert}`} onClick={() => setOuvert(!ouvert)}>
                    <img src={fleche} alt="Ouvrir cette liste"/>
                </span>
            </div>
            {
                /* Si le dropdown est à TRUE alors il affichera la description */
                ouvert && <div className="description-dropdown">{description}
                <div className="Lien">
                <ExternalLink href={`${link}`} rel="noreferrer"><span>Voir le projet</span></ExternalLink> </div>
                 </div>
            }
        </div>
    );
}

export default Dropdown;