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
  Row
} from "reactstrap";
import FormatoReporte from "./FormatoReporte";
import SweetAlert from "sweetalert-react";
import Cintas from "../controllers/cintas"


const Reportes = () => {


  const [reporte, setReporte] = useState(false);
  const [sweet, setSweet] = useState(false);
  const [sweetNum, setSweetNum] = useState(false);
  const [sweetPredio, setSweetPredio] = useState(false);
  const [tipoReporte, setTipoReporte] = useState("");
  const [desde, setDesde] = useState(0);
  const [hasta, setHasta] = useState(0);
  const [valores, setValores] = useState({ datas: [] });
  const [fincas, setFincas] = useState({ datas: [] });
  const [res, setRes] = useState(false);
  const [resFinca, setResFinca] = useState(false);
  const [datosSemanas, setDatosSemanas] = useState({ sem: [] });

  Cintas.getDataRegistrosPlantaciones().then((respuesta) => {
  
    if (!res) {
      console.log(respuesta)
      setRes(true);
      setValores(respuesta);

    }
  });

  Cintas.getDataFinca().then((respuesta) => {
    if (!resFinca) {
      console.log(respuesta)
      setResFinca(true);
      setFincas(respuesta);
    }
  });

  const [fincaSeleccionada, setFincaSeleccionada] = useState({
    nombre_finca: "",
  });
  const [seleccion, setSeleccion] = useState([]);

  const handleChange = e => {
    let select = [];
    const { name, value } = e.target;
    setFincaSeleccionada((stadoInicial) => ({
      ...stadoInicial,
      [name]: value
    }));

    if (valores.length > 0) {
      valores.map((valor, i) => {
        if (valor.nombre_finca === value) {
          select[i] = valor;
        }
      });
    }

    setSeleccion(select)
  }

  const abrirReporte = () => {
    let semanas = [];
    valores.map((registro, i) => {
      let numero=parseInt(registro.numero_semana);
      
      if ((numero >= desde) && (numero<= hasta)) {        
        semanas[i] = registro;
      }

    });  
    
    if(!tipoReporte){
      setSweet(!sweet)
    }
    else{
      
        if(tipoReporte==="predio"){
            if(fincaSeleccionada.nombre_finca===""){
              setSweetPredio(!sweetPredio)
            }
            else{
              setReporte(!reporte);
            }
        }
        else {
          if(!desde || !hasta){
            setSweetNum(!sweetNum)
          }
          else{
            setReporte(!reporte);
          }
        }

    
     
  }

   

  setDatosSemanas(semanas);


  };
  return (
    <Fragment>
      <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
        transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
        <Container fluid>
          {res === true ? (
            <Card className="main-card">
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

                      <Col style={{ textAlign: "center" }} sm={8}>
                        <Label style={{ fontWeight: "bold", }} for="exampleEmail" >
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
                        <Input style={{ marginTop: "10px" }} name="nombre_finca" type="select" onChange={handleChange}>
                          <option>Elige una opción</option>
                          {fincas.map((dato, i) => {

                            return (<option key={i} value={dato.nombre_finca}  >{dato.nombre_finca}</option>);
                          })

                          }


                        </Input>
                      </Col>
                    ) : (
                          <div></div>
                        )

                    }


                  </FormGroup>


                  <FormGroup row>

                    <Col >
                      <SweetAlert title="Selecciona tipo de reporte para continuar" confirmButtonColor="" show={sweet}
                        text="" type="error" onConfirm={() => { setSweet(!sweet) }} />
                      <SweetAlert title="Inserta el rango de fecha para continuar" confirmButtonColor="" show={sweetNum}
                        text="" type="error" onConfirm={() => { setSweetNum(!sweetNum) }} />
                         <SweetAlert title="Selecciona un predio para continuar" confirmButtonColor="" show={sweetPredio}
                        text="" type="error" onConfirm={() => { setSweetPredio(!sweetPredio) }} />
                    </Col>

                   
                  </FormGroup>
                </Form>
              </CardBody>
              <div style={{ marginTop: -40 }} className="divider" />

              <Row className="text-right pr-5 pb-3">
                <Col>{reporte ? (
                   <Button onClick={abrirReporte} className="btn-icon btn-dashed" color="primary">
                   <i className="lnr-eye btn-icon-wrapper"> </i>
                        Cerrar reporte
                    </Button>
                ):(
                  <Button onClick={abrirReporte} className="btn-icon btn-dashed" color="primary">
                  <i className="lnr-eye btn-icon-wrapper"> </i>
                       Visualizar reporte
                   </Button>
                )

                }
                 
                </Col>

                <Col style={{ marginTop: 10 }} sm={12}>
                      {reporte && (<FormatoReporte datas={seleccion} tipoReporte={tipoReporte} finca={fincaSeleccionada} sem={datosSemanas} desde={desde} hasta={hasta} />)

                      }
                    </Col>
              </Row>

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