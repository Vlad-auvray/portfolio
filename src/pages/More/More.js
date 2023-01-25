import React from "react";
import "./More.css";

function More() {
    return(
        <div className="More">
        <div className="story">
             <h2>Raconte-nous ton histoire !</h2>
             <p>Après avoir passé une partie de ma vie en Picardie, d'abord de par mon parcours universitaire, puis d'une expérience professionnelle, j'ai décidé de m'installer en Bretagne, et plus précisément dans le Morbihan.
             La mer, les crêperies, et de véritables terrains de jeu pour courir et randonner: j'ai trouvé le meilleur spot du monde pour m'épanouir !
                Dans ce cadre inspirant, et après 5 années dans la gestion de projets, j'ai souhaité me spécialiser dans le développement web afin de pouvoir collaborer dans un environnement tourné vers l'innovation.</p>
          
            <h3>Ok, et quand tu ne codes pas ? Que fais-tu ?</h3>
            <p>En dehors de mon acitivité pro, je prends le temps de faire 2 sorties running par semaine 🏃🏻, histoire de me maintenir dans une bonne énergie ⚡.
            Chaque année, j'organise un petit périple de quelques jours sur les chemins de randonnées 🥾🏕️. Cela me permet de me mettre "hors ligne", et de savourer l'instant, même dans la difficulté.
            J'assume aussi pleinement mon côté geek autour de quelques sessions gaming dans un bon esprit de camaraderie avec mes amis. 🎮 <span>(Bientôt sur Twitch ! pour de vrai.)</span></p>
          </div>
    

        <div className="More-intro">
<h2>Envie d'aventure ?</h2>
       <h3>Belle-île à pied c'est 4 jours de marche avec ma maison sur le dos pour parcourir ses quelques 80km de sentier côtier et ses 2000m de dénivelé cumulés.
       <br></br>Oui, Belle-Île, ça monte et ça descends tout le temps !</h3></div>

        <div className="video-bloc"><iframe width="1000" height="555" src="https://www.youtube.com/embed/a-KHNQC5WVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
       
     </div>

    
    );
}

export default More;