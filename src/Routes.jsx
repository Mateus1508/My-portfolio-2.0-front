import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Experiences from "./Pages/Experiences";
import Abilitys from "./Pages/Abilitys";

const AppRoutes = () => {
  return(

      <Routes>
        <Route element={ <Home /> }  path="/" />
        <Route element={ <Projects /> }  path="/projects" />
        <Route element={ <Experiences /> }  path="/experiences" />
        <Route element={ <Abilitys /> }  path="/abilitys" />
      </Routes>
  
  )
};

export default AppRoutes;