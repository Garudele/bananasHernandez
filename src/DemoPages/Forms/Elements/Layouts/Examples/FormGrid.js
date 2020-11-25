import React, { Fragment, useState } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  ButtonToggle,
} from "reactstrap";
import Cintas from '../../../../../controllers/cintas';

const FormGrid = (props) => {

  const [data, setData] = useState([])
  const [res, setRes] = useState(false)

  Cintas.getData().then((respuesta) => {
      if (!res) {
      setRes(true)
      setData(respuesta)
    }
  });  
  

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
          <Card className="main-card mb-3">
            <CardBody>
              <CardTitle>Registro de plantaciones</CardTitle>
              <Form>
                <FormGroup row>
                  <Label for="exampleSelect" sm={2}>
                    Finca
                  </Label>
                  <Col sm={4}>
                  <Input type="select" name="select" id="exampleSelect">
                      {data.map((dato,i)=>{
                          console.log(dato);
                        return(<option key={i} value={dato.nombre_finca}>{dato.nombre_finca}</option>);
                      })
                      
                      }
                     
                    </Input>
                  </Col>
                  <Label for="examplePassword" sm={2}>
                    Numero de semana
                  </Label>
                  <Col sm={2}>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="48"
                    />
                  </Col>
                </FormGroup>
                <hr></hr>

                <CardTitle>Plantación de bananos</CardTitle>
                <FormGroup row>

                <Label for="examplePassword" sm={2}>
                     Cantidad 
                    </Label>
                    <Col sm={3}>
                      <Input type="password" name="password" id="examplePassword" placeholder=""/>
                    </Col>                 

                  <Label for="examplePassword" sm={3}>
                    Color de cinta correspondiente
                  </Label>
                  <Col sm={2}>
                    <Input
                      style={{ background: "red" }}
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder=""
                    />
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 14, offset: 10 }}>
                    <ButtonToggle color="info">Guardar</ButtonToggle>
                    <ButtonToggle className="ml-3" color="danger">
                      Salir
                    </ButtonToggle>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </CSSTransitionGroup>
    </Fragment>
  );
};


export default FormGrid;