import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap";

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
                        <Col sm="6">
                          <Button
                            className="btn-icon-vertical btn-square btn-transition"
                            outline
                            color="primary"
                          >
                            <div>
                              <i className="lnr-calendar-full  btn-icon-wrapper">
                                {" "}
                              </i>
                            </div>
                            <div>Alta de patron de colores</div>
                          </Button>
                        </Col>
                        <Col sm="6">
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
                        </Col>
                        <Col sm="6">
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
                        </Col>
                        <Col sm="6">
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

