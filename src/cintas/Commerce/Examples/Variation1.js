import { interpolateRgb } from "d3-interpolate";
import React, { Fragment, Component } from "react";
import moment from "moment";
import {Link} from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
} from "reactstrap";

import Card2 from "../../Sales/Examples/Card2";







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
  
    const interpolate = interpolateRgb(this.startColor, this.endColor);
  
    
    let anio = moment().year();
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col lg="12" xl="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <Card2  boton={true} />
                </CardBody>
              </Card>
            </Col>
            <Col lg="12" xl="6">
              <Card className="main-card mb-3">
                <div className="grid-menu grid-menu-2col">
                  <Row className="no-gutters">
                    <Col sm="6">
                    <Link style={{textDecoration:"none"}}  to="/controlcintas/altaCintas" >
                      <div className="widget-chart widget-chart-hover">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-primary" />
                          <i className="lnr-pencil  btn-icon-wrapper"></i>
                        </div>
                        <div className="widget-numbers">Alta patrón cintas</div>
                        <div className="widget-subheading">{anio}</div>
                       
                      </div>
                      </Link>
                    </Col>
                    <Col  sm="6">
                    <Link style={{textDecoration:"none"}}  to="/controlcintas/calendario">
                      <div className="widget-chart widget-chart-hover">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-info" />
                          <i className="lnr-calendar-full  btn-icon-wrapper"></i>
                        </div>
                        <div className="widget-numbers">Calendario de cintas</div>
                        <div className="widget-subheading">{anio}</div>
                        
                      </div>
                      </Link>
                    </Col>
                    <Col sm="6">
                    <Link style={{textDecoration:"none"}}  to="/controlcintas/registroPlantaciones">
                      <div className="widget-chart widget-chart-hover">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-danger" />
                          <i className="lnr-file-add text-danger" />
                        </div>
                        <div className="widget-numbers text-center">Registrar</div>
                        <div className="widget-subheading">
                          plantaciones
                        </div>
                        
                      </div>
                      </Link>
                    </Col>
                    <Col sm="6">
                    <Link style={{textDecoration:"none"}}  to="/controlcintas/registros">
                      <div className="widget-chart widget-chart-hover br-br">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-primary" />
                          <i className="lnr-screen" />
                        </div>
                        <div className="widget-numbers">Registros</div>
                        <div className="widget-subheading">plantaciones</div>
                        
                      </div>
                      </Link>
                    </Col>
                    <Col sm="6">
                    <Link style={{textDecoration:"none"}}  to="/controlcintas/monitoreo">
                      <div className="widget-chart widget-chart-hover br-br">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-info" />
                          <i className="lnr-chart-bars" />
                        </div>
                        <div className="widget-numbers">Monitoreo</div>
                        <div className="widget-subheading">Siembras</div>
                        
                      </div>
                      </Link>
                    </Col>
                    <Col sm="6">
                    <Link style={{textDecoration:"none"}}  to="/controlcintas/reportes">
                      <div className="widget-chart widget-chart-hover br-br">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-danger" />
                          <i className="lnr-printer" />
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
