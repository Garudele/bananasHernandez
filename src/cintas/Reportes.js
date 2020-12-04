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
} from "reactstrap";
import Rodal from "rodal";
import FormatoReporte from "./FormatoReporte";
import SweetAlert from "sweetalert-react";
import {Link} from "react-router-dom";
import Cintas from "../controllers/cintas"


const Reportes = () => {

  const [modal, setModal] = useState(false);

  const hide = () => {
    setModal(!modal)
  };
  const [reporte, setReporte]=useState(false);
  const [sweet,setSweet]=useState(false);
  const [sweetNum,setSweetNum]=useState(false);
  const [tipoReporte, setTipoReporte] = useState("");
  const [desde,setDesde]=useState("");
  const [hasta,setHasta]=useState("");
  
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
  

  const [valores, setValores] = useState({datas:[]});
  const [res, setRes] = useState(false);  

  Cintas.getDataRegistrosPlantaciones().then((respuesta) => {

    if (!res) {    
      console.log(respuesta) 
      setRes(true);
      setValores(respuesta);    

    }
  });

//  if(valores.datas.finca_nombre=== valor){

//  }
 

  return (
    <Fragment>
      <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
        transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
        <Container fluid>
          <Card className="main-card mb-3">
            <CardBody>
              <CardTitle><h3 style={{ fontWeight: "bold" }}  >Reportes de cintas</h3></CardTitle>
              <div className="divider" />
              <Form>
                <FormGroup row>
                  <Col sm={5}>
                    <Label style={{ fontWeight: "bold" }} for="exampleEmail" >
                      Selecciona un tipo de reporte
                    </Label>
                  </Col>
                  
                </FormGroup>
                <FormGroup row>
                  <Col sm={4}>
                    <Input style={{ marginTop: "20px" }} type="select" onChange={(e) => { setTipoReporte(e.target.value) }}>
                      <option >Elige una opción</option>
                      <option value="semana" >Por semana</option>
                      <option value="predio">Por predio</option>
                    </Input>
                  </Col>

                  {tipoReporte ==="semana" ?(
                  <div>
<Col sm={3}>
                    <Label style={{ fontWeight: "bold" }} for="exampleEmail" >
                      Selecciona el rango de fecha
                    </Label>
                  </Col>

                      <Col>
                    <strong><span>De la semana:</span></strong>
                    <Input type="number" onChange={(e) => { setDesde(e.target.value) }} />
                  </Col>

                  <Col sm={2}>
                    <strong><span>A la semana:</span></strong>
                    <Input type="number" onChange={(e) => { setHasta(e.target.value) }} />
                    
                  </Col>
                  </div>
                  ):tipoReporte ==="predio" ?(
                    <Col sm={4}>
                    <Input style={{ marginTop: "20px" }} type="select" onChange={(e) => { setTipoReporte(e.target.value) }}>
                      <option >Elige una predio</option>
                      <option value="semana" >Por semana</option>
                      <option value="predio">Por predio</option>
                    </Input>
                  </Col>
                  ):(
                    <div></div>
                  )
                    
                  }
                  
                
                 <Col sm={3}>
                    <Button style={{ marginTop: "23px" }} onClick={abrirReporte} className="mb-2 mr-2 btn-icon btn-dashed" color="primary">
                      <i className="lnr-eye btn-icon-wrapper"> </i>
                    Visualizar reporte
                  </Button>
                  
                
                  <SweetAlert title="Seleccione tipo de reporte para continuar" confirmButtonColor="" show={sweet}
                    text="" type="error" onConfirm={()=>{setSweet(!sweet)}}/>  
                    <SweetAlert title="Inserte el rango de fecha para continuar" confirmButtonColor="" show={sweetNum}
                    text="" type="error" onConfirm={()=>{setSweetNum(!sweetNum)}}/>          
                  </Col>

                  <Col style={{marginTop:10}} sm={12}>
                  {reporte&&(<FormatoReporte  datas={valores}/>)
                  
                  }
                  </Col>
              
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </CSSTransitionGroup>
      <Rodal width="1000" visible={modal} onClose={hide} animation="rotate" showMask={false}>
        <FormatoReporte />
      </Rodal>
    </Fragment>
  )
}

export default Reportes;