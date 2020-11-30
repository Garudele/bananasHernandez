import "./polyfills";
import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import { HashRouter } from "react-router-dom";
import "./assets/base.scss";
import Main from "./cintas";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";
import {Container, Row, Col} from "reactstrap";
const store = configureStore();
const rootElement = document.getElementById("root");

const renderApp = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
       <Container>
         <Row>
           <Col>
           <Component />
           </Col>
         </Row>
       </Container>
      </HashRouter>
    </Provider>,
    rootElement
  );
};

renderApp(Main);

if (module.hot) {
  module.hot.accept("./cintas", () => {
    const NextApp = require("./cintas").default;
    renderApp(NextApp);
  });
}
serviceWorker.unregister();
