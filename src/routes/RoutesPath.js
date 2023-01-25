import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout"
import Accueil from "../pages/Accueil/Accueil";
import Fiche from '../pages/Fiche-projet/Fiche';
import More from "../pages/More/More";
import Contact from "../pages/Contact/Contact";
import Erreur404 from "../pages/404/404";


function RoutesPath() {
    return(
        <HashRouter>
            <Layout>
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="/projet/:id" element={<Fiche />}/>
                    <Route path="/more" element={<More />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="*" element={<Erreur404 />}/>
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default RoutesPath;