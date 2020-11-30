import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {
  Button,  
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap";

import {Link} from "react-router-dom";


export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  render() {
    return (
      <Fragment>
        <CSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Container fluid>
            <Row>
              <Col xl="12" lg="12">                
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Cintas</CardTitle>
                    <div className="grid-menu grid-menu-2col">
                      <Row className="no-gutters">
                        <Col sm="4">
                        <Link style={{textDecoration:"none"}}  to="/altaCintas" >
                        <Button
                            className="btn-icon-vertical btn-square btn-transition"
                            outline
                            color="primary"
                          >
                            <div>
                              <i className="lnr-calendar-full  btn-icon-wrapper">                               
                              </i>
                            </div>
                            <div>Alta de patron de colores</div>
                          </Button></Link>
                        </Col>
                        
                        <Col sm="4">
                         <Link style={{textDecoration:"none"}} to="/registroPlantaciones" >
                         <Button
                            className="btn-icon-vertical btn-square btn-transition"
                            outline
                            color="secondary"
                          >
                            <div>
                              <i className="lnr-screen btn-icon-wrapper "> </i>
                            </div>
                            <div>Cargar plantaciones</div>
                          </Button>
                         </Link >
                        </Col>
                        <Col sm="4">
                          <Link style={{textDecoration:"none"}} to="/registros" >
                          <Button
                            className="btn-icon-vertical btn-square btn-transition"
                            outline
                            color="success"
                          >
                            <div>
                              <i className="pe-7s-wallet btn-icon-wrapper"> </i>
                            </div>
                            Registro de plantaciones
                          </Button>
                          </Link>
                        </Col>
                        <Col sm="4">
                         <Link  style={{textDecoration:"none"}} to="/calendario"  >
                         <Button
                            className="btn-icon-vertical btn-square btn-transition"
                            outline
                            color="info"
                          >
                            <div>
                              <i className="pe-7s-wristwatch btn-icon-wrapper">
                                {" "}
                              </i>
                            </div>
                            Calendario Anual
                          </Button>
                         </Link>
                        </Col>
                        <Col sm="4">
                         <Link  style={{textDecoration:"none"}} to="/monitoreo"  >
                         <Button
                            className="btn-icon-vertical btn-square btn-transition"
                            outline
                            color="info"
                          >
                            <div>
                              <i className="pe-7s-wristwatch btn-icon-wrapper">
                                {" "}
                              </i>
                            </div>
                            Monitoreo de plantaciones
                          </Button>
                         </Link>
                        </Col>
                        <Col sm="4">
                         <Link  style={{textDecoration:"none"}} to="/monitoreo"  >
                         <Button
                            className="btn-icon-vertical btn-square btn-transition"
                            outline
                            color="info"
                          >
                            <div>
                              <i className="pe-7s-wristwatch btn-icon-wrapper">
                                {" "}
                              </i>
                            </div>
                            Reportes
                          </Button>
                         </Link>
                        </Col>
                        
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

