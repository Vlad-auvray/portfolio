import { useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";



export default function Navbar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false)
  
    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
         Vladimir Auvray 
         <h2>Le web dev qui carbure au maté 🧉</h2>
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg viewBox="0 0 100 80" width="40" height="40">
  <rect width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect y="60" width="100" height="20"></rect>
</svg>
        </button>
        <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/accueil">Accueil</Link>
          </li>
          <li>
            <Link to="/more">Supplément Chantilly</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        </div>
      </nav>
      
    )
  }