
import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Inicio
import Menu from "./menu";
import AltaCintas from "./altaCintas";
import RegistroPlantaciones from "./altaRegistros";
import Registros from "./tablaRegistros";
import Monitoreo from "./menu";




const Dashboards = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`/`} component={Menu}/>
          <Route path={`/altaCintas`} component={AltaCintas} />
          <Route path={`/registroPlantaciones`} component={RegistroPlantaciones} />
          <Route path={`/resgistros`} component={Registros} />
          <Route path={`/monitoreo`} component={Monitoreo}/>
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Dashboards;