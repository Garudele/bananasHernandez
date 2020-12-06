import React, { Fragment, useEffect, useState } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  ButtonToggle,
} from "reactstrap";
import Cintas from '../../controllers/cintas';
import moment from 'moment';
import Axios from "axios";
import SweetAlert from "sweetalert-react";

import {faNetworkWired } from "@fortawesome/free-solid-svg-icons";

const FormGrid = (props) => {

  const [data, setData] = useState([])
  const [res, setRes] = useState(false)
  const [editar, setEditar] = useState(false);
  const [registro, setRegistro] = useState(
    {
      numero_semana: "",
      nombre_finca: "",
      cantidad: "",
      color: "",
      codigo: "",
      anio: "",
      fecha_registro: "",
    }
  );

  let setDatosNuevos = props.setDatosNuevos;

  useEffect(() => {
    if (props.editar) {
      setEditar(props.editar)
      setRegistro(props.registro)
    }
  })

  Cintas.getDataFinca().then((respuesta) => {
    if (!res) {
      
      setRes(true)
      setData(respuesta)
    }
  });

  const [color, setColor] = useState([]);
  const [resColor, setResColor] = useState(false);

  Cintas.getDataColor().then((Response) => {
    if (!resColor) {
      setResColor(true)
      setColor(Response)
    }

  })

  let anio = moment().year();
  let num = moment().weeks();
  let colorcinta = "";
  let codigo = "";

  color.forEach(cod => {
    if (parseInt(cod.semana) === num) {
      codigo = cod.codigo;
      colorcinta = cod.color;
    }
  });

  const [fincaSeleccionada, setFincaSeleccionada] = useState({
    nombre_finca: "",
    cantidad: ""
  });

  const handleChange = e => {

    const { name, value } = e.target;
    setFincaSeleccionada((stadoInicial) => ({
      ...stadoInicial,
      [name]: value
    }));

  }


  const handleChangeEditar = e => {

    const { name, value } = e.target;
    setDatosNuevos((datosNuevos) => ({
      ...datosNuevos,
      [name]: value
    }));

  }
  const [sweetRes, setSweetRes] = useState(false);
  const [sweet, setSweet] = useState(false);
  const [sweetNum, setSweetNum] = useState(false);
  const [sweetInsert, setSweetInsert] = useState(false);
  const insertar = () => {


    const baseUrl = "http://bananashernandez.com/controlcintas/APICintas/plantaciones.php";
    let f = new FormData();

    let cantidad = fincaSeleccionada.cantidad;
    let finca = fincaSeleccionada.nombre_finca;

    f.append('nombre_finca', finca);
    f.append('numero_semana', num);
    f.append('cantidad', cantidad);
    f.append('color', colorcinta);
    f.append('codigo', codigo);
    f.append('anio', anio);
    f.append('METHOD', 'POST');

    if (!finca) {
      setSweet(!sweet);
    }
    else if (!cantidad) {
      setSweetNum(!sweetNum);
    }
    else (
      Axios.post(baseUrl, f).then((respuesta) => {
        setSweetInsert(!sweetInsert);
      })
    )

    window.location = '/controlcintas/registroPlantaciones';
  };

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
        <div>
          {res === true && resColor ===true ?(
            <div>
            {editar === true ? (
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

                          <Input type="select" name="nombre_finca" id="exampleSelect" onChange={handleChangeEditar} >

                            {data.map((dato, i) => {
                              if (dato.nombre_finca === registro.nombre_finca) {

                                return (<option selected key={i} value={dato.nombre_finca}  >{dato.nombre_finca}</option>);
                              }
                              else {
                                return (<option key={i} value={dato.nombre_finca}  >{dato.nombre_finca}</option>);
                              }

                            })

                            }

                          </Input>
                        </Col>
                        <Label for="examplePassword" sm={2}>
                          Numero de semana
                  </Label>
                        <Col sm={2}>
                          <div style={{ fontFamily: faNetworkWired, color: 'blue', fontSize: 28 }}>
                            {registro.numero_semana}
                          </div>
                        </Col>
                      </FormGroup>
                      <hr></hr>
                      <CardTitle>Plantación de bananos</CardTitle>
                      <FormGroup row>

                        <Label for="examplePassword" sm={2}>
                          Cantidad
                    </Label>
                        <Col sm={3}>
                          <Input onChange={handleChangeEditar} type="number" name="cantidad" placeholder={registro.cantidad} />
                        </Col>

                        <Label for="examplePassword" sm={3}>
                          Color de cinta correspondiente
                  </Label>

                        <Col sm={2}>

                          <Input
                            disabled
                            style={{ background: registro.codigo }}
                            type="text"
                            value={registro.color}
                          />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Container>
            ) : (
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
                            <Input type="select" name="nombre_finca" id="exampleSelect" onChange={handleChange} >
                              <option >Elige un predio</option>
                              {data.map((dato, i) => {

                                return (<option key={i} value={dato.nombre_finca}  >{dato.nombre_finca}</option>);
                              })

                              }

                            </Input>
                          </Col>
                          <Label for="examplePassword" sm={2}>
                            Numero de semana
                  </Label>
                          <Col sm={2}>
                            <div style={{ fontFamily: faNetworkWired, color: 'blue', fontSize: 28 }}>
                              {num}
                            </div>
                            {/* <Input
                      disabled
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder={num}
                    /> */}
                          </Col>
                        </FormGroup>
                        <hr></hr>

                        <CardTitle>Plantación de bananos</CardTitle>
                        <FormGroup row>

                          <Label for="examplePassword" sm={2}>
                            Cantidad
                    </Label>
                          <Col sm={3}>
                            <Input onChange={handleChange} type="number" name="cantidad" id="examplePassword" placeholder="Inserte la cantidad" />
                          </Col>

                          <Label for="examplePassword" sm={3}>
                            Color de cinta correspondiente
                  </Label>

                          <Col sm={2}>

                            <Input
                              disabled
                              style={{ background: codigo }}
                              type="text"
                              value={colorcinta}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup check row>
                          <Col sm={{ size: 14, offset: 10 }}>
                            <ButtonToggle color="info" onClick={insertar} >Guardar</ButtonToggle>
                            <ButtonToggle onClick={() => { setSweetRes(!sweetRes); window.location = '/menu'; }} className="ml-3" color="danger">
                              Salir
                    </ButtonToggle>

                            <SweetAlert title="Seleccione un predio para continuar" confirmButtonColor="" show={sweet}
                              text="" type="error" onConfirm={() => { setSweet(!sweet) }} />
                            <SweetAlert title="Inserte una cantidad para continuar" confirmButtonColor="" show={sweetNum}
                              text="" type="error" onConfirm={() => { setSweetNum(!sweetNum) }} />
                            <SweetAlert title="Registro agregado correctamente" confirmButtonColor="" show={sweetInsert}
                              text="" type="success" onConfirm={() => { setSweetInsert(!sweetInsert) }} />
                            <SweetAlert title="No se guardo ningún registro" confirmButtonColor="" show={sweetRes}
                              text="" type="error" onConfirm={() => { setSweetRes(!sweetRes) }} />
                          </Col>
                        </FormGroup>
                      </Form>
                    </CardBody>
                  </Card>
                </Container>
              )

            }
          </div>
          ):(
            <h1>Cargando...</h1>
          )

       }
        </div>
      </CSSTransitionGroup>
    </Fragment>
  );
};


export default FormGrid;