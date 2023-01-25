import React from "react";
import "./Fiche.css";
import { useParams, Navigate } from 'react-router-dom';
import { mesProjets } from "../../assets/api/Project";
import Dropdown from "../../components/Dropdown/Dropdown";


function Fiche() {
    /* Récupère la bonne fiche */
    const id = useParams();
    const ficheProject = mesProjets.find(project => project.id === id.id);


    return(
        <>
            {
                ficheProject ? (
                    <div className="Fiche">
                        <img className="ProjectCover" src={ficheProject?.cover} alt={ficheProject?.title}/>
                      
                            <div className="information-projects">
                                <span className="titre-project">{ficheProject?.title}</span>
                              
                                                   
                        </div>
                        <div className="description-projets">
                            <Dropdown titre="Objectif" description={ficheProject?.object} link={ficheProject?.link} />
                           
                        </div>
                    </div>
                ) : <Navigate replace to="/404"/>
            }
        </>
    )
}

export default Fiche;