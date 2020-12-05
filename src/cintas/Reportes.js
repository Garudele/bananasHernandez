import React, { useState, Fragment } from "react";
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
  Container,
  CardFooter,
  Row
} from "reactstrap";
import FormatoReporte from "./FormatoReporte";
import SweetAlert from "sweetalert-react";
import Cintas from "../controllers/cintas"


const Reportes = () => {


  const [reporte, setReporte] = useState(false);
  const [sweet, setSweet] = useState(false);
  const [sweetNum, setSweetNum] = useState(false);
  const [tipoReporte, setTipoReporte] = useState("");
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");

  const abrirReporte = () => {
    // if (tipoReporte === "" ){
    //   setSweet(!sweet)
    // }
    // else if( desde ==="" || hasta===""){
    //   setSweetNum(!sweetNum)
    // }
    // else {
    //   setReporte(!reporte); 
    // }
    setReporte(!reporte);
  };


  const [valores, setValores] = useState({ datas: [] });
  const [res, setRes] = useState(false);

  Cintas.getDataRegistrosPlantaciones().then((respuesta) => {

    if (!res) {
      console.log(respuesta)
      setRes(true);
      setValores(respuesta);

    }
  });


  return (
    <Fragment>
      <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
        transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
        <Container fluid>
          {res === true ? (
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle><h3 style={{ fontWeight: "bold" }}  >Reportes de cintas</h3></CardTitle>
                <div className="divider" />
                <Form>
                 
                  <FormGroup row>
                    <Col sm={3} >
                    <Label style={{ fontWeight: "bold" }} for="exampleEmail" >
                        Selecciona un tipo de reporte
                      </Label>
                      <Input style={{ marginTop: "10px" }} type="select" onChange={(e) => { setTipoReporte(e.target.value) }}>
                        <option >Elige una opción</option>
                        <option value="semana" >Por semana</option>
                        <option value="predio">Por predio</option>
                      </Input>
                    </Col>
                   
                      {tipoReporte === "semana" ? (

                          <Col style={{textAlign:"center"}} sm={8}>
                             <Label style={{ fontWeight: "bold",  }} for="exampleEmail" >
                          Inserte el rango de semanas
                          </Label>
                               <Row style={{ marginTop: -11 }}>
                           <Col sm={6}>
                           <strong><span>De la semana:</span></strong>
                          <Input type="number" onChange={(e) => { setDesde(e.target.value) }} />
                           </Col>
                           <Col sm={6}>
                          <strong><span>A la semana:</span></strong>
                          <Input type="number" onChange={(e) => { setHasta(e.target.value) }} />
                           </Col>

                        </Row>
                          </Col>

                      ) : tipoReporte === "predio" ? (
                        <Col sm={4}>
                           <Label style={{ fontWeight: "bold" }} for="exampleEmail" >
                            Selecciona un predio
                            </Label>
                        <Input style={{ marginTop: "10px" }} type="select" onChange={(e) => { setTipoReporte(e.target.value) }}>
                          <option >Elige una opción</option>
                          <option value="semana" >Por semana</option>
                          <option value="predio">Por predio</option>
                        </Input>
                        </Col>
                      ) : (
                            <div></div>
                          )

                      }
                  
                  </FormGroup>


                  <FormGroup row>

                    <Col >
                      <SweetAlert title="Seleccione tipo de reporte para continuar" confirmButtonColor="" show={sweet}
                        text="" type="error" onConfirm={() => { setSweet(!sweet) }} />
                      <SweetAlert title="Inserte el rango de fecha para continuar" confirmButtonColor="" show={sweetNum}
                        text="" type="error" onConfirm={() => { setSweetNum(!sweetNum) }} />
                    </Col>

                    <Col style={{ marginTop: 10 }} sm={12}>
                      {reporte && (<FormatoReporte datas={valores} />)

                      }
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <FormGroup>
                  <Button style={{ marginTop: "23px", }} onClick={abrirReporte} className="mb-2 mr-2 btn-icon btn-dashed" color="primary">
                    <i className="lnr-eye btn-icon-wrapper"> </i>
                         Visualizar reporte
                     </Button>
                </FormGroup>
              </CardFooter>
            </Card>
          ) : (
              <h1>Cargando...</h1>
            )
          }
        </Container>
      </CSSTransitionGroup>
    </Fragment>
  )
}

export default Reportes;