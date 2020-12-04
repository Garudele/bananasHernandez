
import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Inicio
import Menu from "./Commerce";
import AltaCintas from "./altaCintas/altaCintas";
import RegistroPlantaciones from "./altaRegistros/altaRegistros";
import Registros from "./tablaRegistros/tablaRegistros";
import Monitoreo from "./monitoreo/monitoreo";
import Calendario from "./altaCintas/Calendario";
import Analytics from "./Analytics";
import Sales from "./Sales";
import Reportes from "./Reportes";
import FormatoReporte from "./FormatoReporte";

const Dashboards = ({ match }) => (
  <Fragment>
   <div className="app-main__inner">
          <Route path={`/`} component={Menu}/>
          <Route path={`/altaCintas`} component={AltaCintas} />
          <Route path={`/registroPlantaciones`} component={RegistroPlantaciones} />
          <Route path={`/registros`} component={Registros} />
          <Route path={`/calendario`} component={Calendario} />
          <Route path={`/monitoreo`} component={Sales}/>
          <Route path={`/reportes`} component={Reportes}/>
          <Route path={`/formato`} component={FormatoReporte}/>
        </div>
  </Fragment>
);

export default Dashboards;