
import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Inicio
import Menu from "./Commerce";
import AltaCintas from "./altaCintas/altaCintas";
import RegistroPlantaciones from "./altaRegistros/altaRegistros";
import Registros from "./tablaRegistros/tablaRegistros";
import Calendario from "./altaCintas/Calendario";
import Sales from "./Sales";
import Reportes from "./Reportes";
import FormatoReporte from "./FormatoReporte";

const Dashboards = ({ match }) => (
  <Fragment>
   <div className="app-main__inner">
          <Route path={`/controlcintas`} component={Menu}/>
          <Route path={`/controlcintas/altaCintas`} component={AltaCintas} />
          <Route path={`/controlcintas/registroPlantaciones`} component={RegistroPlantaciones} />
          <Route path={`/controlcintas/registros`} component={Registros} />
          <Route path={`/controlcintas/calendario`} component={Calendario} />
          <Route path={`/controlcintas/monitoreo`} component={Sales}/>
          <Route path={`/controlcintas/reportes`} component={Reportes}/>
        </div>
  </Fragment>
);

export default Dashboards;