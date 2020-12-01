import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import React, { Fragment, Component } from "react";
import LiquidFillGauge from "react-liquid-gauge";
import moment from "moment";
import {Link} from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Nav,
  NavItem,
  Card,
  CardBody,
  CardTitle,
  NavLink,
  Container,
  Table,
  CardHeader,
  CardFooter,
  ButtonGroup,
  Popover,
  PopoverBody,
  ListGroupItem,
  ListGroup,
} from "reactstrap";


import bg1 from "../../../assets/utils/images/dropdown-header/abstract1.jpg";
import bg2 from "../../../assets/utils/images/dropdown-header/abstract2.jpg";
import bg3 from "../../../assets/utils/images/dropdown-header/abstract3.jpg";

import classnames from "classnames";

import avatar1 from "../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../assets/utils/images/avatars/3.jpg";
import avatar4 from "../../../assets/utils/images/avatars/4.jpg";

import IncomeReport from "./Components/IncomeReport";

import {
  faAngleUp,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TablaRegistros from "../../tablaRegistros/tablaRegistros"


function boxMullerRandom() {
  let phase = true,
    x1,
    x2,
    w;

   

  return (function () {
    if (phase) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(10);

export default class CommerceDashboard1 extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.togglePop1 = this.togglePop1.bind(this);
    this.togglePop2 = this.togglePop2.bind(this);
    this.togglePop3 = this.togglePop3.bind(this);
    this.togglePop4 = this.togglePop4.bind(this);

    this.state = {
      activeTab: "1",
      popoverOpen1: false,
      popoverOpen2: false,
      popoverOpen3: false,
      popoverOpen4: false,
      value: 45,
      value2: 72,
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  togglePop1() {
    this.setState({
      popoverOpen1: !this.state.popoverOpen1,
    });
  }

  togglePop2() {
    this.setState({
      popoverOpen2: !this.state.popoverOpen2,
    });
  }

  togglePop3() {
    this.setState({
      popoverOpen3: !this.state.popoverOpen3,
    });
  }

  togglePop4() {
    this.setState({
      popoverOpen4: !this.state.popoverOpen4,
    });
  }

  startColor = "#6495ed"; // cornflowerblue
  endColor = "#dc143c"; // crimson

  render() {
    const radius = 107;
    const interpolate = interpolateRgb(this.startColor, this.endColor);
    const fillColor = interpolate(this.state.value / 100);
    const gradientStops = [
      {
        key: "0%",
        stopColor: color(fillColor).darker(0.5).toString(),
        stopOpacity: 1,
        offset: "0%",
      },
      {
        key: "50%",
        stopColor: fillColor,
        stopOpacity: 0.75,
        offset: "50%",
      },
      {
        key: "100%",
        stopColor: color(fillColor).brighter(0.5).toString(),
        stopOpacity: 0.5,
        offset: "100%",
      },
    ];
    let anio = moment().year();
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col lg="12" xl="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Monitoreo de siembras {anio}</CardTitle>
                  <IncomeReport />
                </CardBody>
              </Card>
            </Col>
            <Col lg="12" xl="6">
              <Card className="main-card mb-3">
                <div className="grid-menu grid-menu-2col">
                  <Row className="no-gutters">
                    <Col sm="6">
                    <Link style={{textDecoration:"none"}}  to="/altaCintas" >
                      <div className="widget-chart widget-chart-hover">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-primary" />
                          <i className="lnr-calendar-full  btn-icon-wrapper"></i>
                        </div>
                        <div className="widget-numbers">Alta patrón cintas</div>
                        <div className="widget-subheading">{anio}</div>
                       
                      </div>
                      </Link>
                    </Col>
                    <Col  sm="6">
                    <Link style={{textDecoration:"none"}}  to="/calendario">
                      <div className="widget-chart widget-chart-hover">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-info" />
                          <i className="lnr-graduation-hat text-info" />
                        </div>
                        <div className="widget-numbers">Calendario de cintas</div>
                        <div className="widget-subheading">{anio}</div>
                        
                      </div>
                      </Link>
                    </Col>
                    <Col sm="6">
                    <Link style={{textDecoration:"none"}}  to="/registroPlantaciones">
                      <div className="widget-chart widget-chart-hover">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-danger" />
                          <i className="lnr-laptop-phone text-danger" />
                        </div>
                        <div className="widget-numbers text-center">Registrar</div>
                        <div className="widget-subheading">
                          plantaciones
                        </div>
                        
                      </div>
                      </Link>
                    </Col>
                    <Col sm="6">
                    <Link style={{textDecoration:"none"}}  to="/registros">
                      <div className="widget-chart widget-chart-hover br-br">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-success" />
                          <i className="lnr-screen" />
                        </div>
                        <div className="widget-numbers">Registros</div>
                        <div className="widget-subheading">plantaciones</div>
                        
                      </div>
                      </Link>
                    </Col>
                    <Col sm="6">
                    <Link style={{textDecoration:"none"}}  to="/monitoreo">
                      <div className="widget-chart widget-chart-hover br-br">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-success" />
                          <i className="lnr-screen" />
                        </div>
                        <div className="widget-numbers">Monitoreo</div>
                        <div className="widget-subheading">Siembras</div>
                        
                      </div>
                      </Link>
                    </Col>
                    <Col sm="6">
                    <Link style={{textDecoration:"none"}}  to="/reportes">
                      <div className="widget-chart widget-chart-hover br-br">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-success" />
                          <i className="lnr-screen" />
                        </div>
                        <div className="widget-numbers">Reportes</div>
                        <div className="widget-subheading">de siembras</div>
                        
                      </div>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>        
         
        </Container>
      </Fragment>
    );
  }
}
