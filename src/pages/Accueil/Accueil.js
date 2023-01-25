import React from "react";
import "./Accueil.css";
import { NavLink } from "react-router-dom";
import Tuile from "../../components/Tuile/Tuile";
import {mesProjets} from "../../assets/api/Project";
import Presentation from "../../components/Presentation/Presentation";



function Accueil() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('CV-VLADIMIR-AUVRAY.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV-VLADIMIR-AUVRAY.pdf';
                alink.click();
            })
        })
    }
    return(
     <>
        <Presentation />
        <div className="Accueil">
        <h2>Mes projets :</h2>
            <div className="liste-experiences">   
                {mesProjets.map((project) => <NavLink key={project.id} to={"/projet/" +project.id+"/#"}><Tuile key={project.id} id={project.id} cover={project.cover} titre={project.title} /></NavLink>)}
            </div>
            <div className="cv-block">
                <button className="cv-btn" onClick={onButtonClick}>
                    Télécharger mon CV
                </button>
            </div>
            </div>
            </>
    );
}

export default Accueil;