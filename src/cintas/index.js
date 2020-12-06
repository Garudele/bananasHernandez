
import React, { Fragment } from "react";
import { Route } from "react-router-dom";
// Inicio
import Menu from "./Commerce";
import AltaCintas from "./altaCintas/altaCintas";
import RegistroPlantaciones from "./altaRegistros/altaRegistros";
import Registros from "./tablaRegistros/tablaRegistros";
import Calendario from "./altaCintas/Calendario";
import Monitoreo from "./Sales";
import Reportes from "./Reportes";

const Dashboards = ({ match }) => (
  <Fragment>
   <div className="app-main__inner">
          <Route path={`/controlcintas`} component={Menu}/>
          <Route exact path={`/controlcintas/altaCintas`} component={AltaCintas} />
          <Route exact path={`/controlcintas/registroPlantaciones`} component={RegistroPlantaciones} />
          <Route exact path={`/controlcintas/registros`} component={Registros} />
          <Route exact path={`/controlcintas/calendario`} component={Calendario} />
          <Route exact path={`/controlcintas/monitoreo`} component={Monitoreo}/>
          <Route exact path={`/controlcintas/reportes`} component={Reportes}/>
        </div>
  </Fragment>
);

export default Dashboards;