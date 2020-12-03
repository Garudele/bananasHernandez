import React, { useState, Fragment} from "react";
import { CSSTransitionGroup } from "react-transition-group";
import {
    Row,
    Col,
    Card,
    CardBody,
    UncontrolledButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Alert,
} from "reactstrap";
import Rodal from "rodal";
import SweetAlert from "sweetalert-react";
import Cintas from "../controllers/cintas";
import moment from "moment";
import Axios from "axios";

const PatronRegistrado = () => {

    const [modalEliminar, setModalEliminar]=useState(false);
    const [sweetEliminar,setSweetEliminar]=useState(false);
    const [sweetElim,setSweetElim]=useState(false);

    let anioActual = moment().year();
    const [res,setRes]=useState(false);
    const [consulta,setConsulta]=useState(false);

    Cintas.getDataRegistrosPlantaciones().then((Response) => {

        if (!res) {
            Response.forEach(element => {
              if (element.anio == anioActual) {
                setConsulta(true)
                setRes(true)
              }
            });
          }
      });



      const Delete=()=>{
        
       
        const baseUrl = "http://localhost/BananasHernandez/cintas/semanaCinta.php"; 
        let f= new FormData();
        f.append("anio", anioActual);
        f.append("METHOD","ELIMINAR_PATRON")  
      
        if(consulta){
            setSweetElim(!sweetElim);
        }
        else{
            Axios.post(baseUrl,f).then((respuesta)=>{     
             setSweetEliminar(!sweetEliminar);            
             window.location = '/menu';
            });
        }
      
      }




    return (
        <Fragment>
          
            <Row>
                <Col md="12">
                    <Card className="main-card mb-3">
                        <CardBody>
                            <Alert color="success">
                                <h4 className="alert-heading">El patrón de cintas de este año ya fue registrado</h4>
                                <p>
                                    Si desea modificarlo oprima el boton "Eliminar" e inserte el patrón de cintas nuevamente, si cuenta con registros de plantaciones con
                                    este patrón, no podra eliminarlo.
                              </p>
                                <hr />
                                <p className="mb-0">
                                    <Button onClick={()=>{setModalEliminar(!modalEliminar)}} className="mb-2 mr-2" color="success">
                                        Eliminar
                                    </Button>
                                </p>
                            </Alert>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Rodal width="700" visible={modalEliminar} onClose={()=>{setModalEliminar(!modalEliminar)}} animation="rotate" showMask={false}>
                <ModalHeader>Eliminar patrón de cintas</ModalHeader>
                <ModalBody>
                    <h2>¿Está seguro de eliminar el patrón de cintas de este año?</h2>
                </ModalBody>
                <ModalFooter>
                    <Button color="link" onClick={() => { setModalEliminar(!modalEliminar) }}>
                        Cancelar
                   </Button>
                    <Button color="primary" onClick={Delete}>
                        Aceptar
               </Button>
                    <SweetAlert title="Registro eliminado" confirmButtonColor="" show={sweetEliminar}
                        text="" type="success" onConfirm={() => { setSweetEliminar(!sweetEliminar) }} />
                        <SweetAlert title="No se puede eliminar el patrón de cintas, ya cuenta con registros en plantaciones" confirmButtonColor="" show={sweetElim}
                        text="" type="error" onConfirm={() => { setSweetElim(!sweetElim)}} />
                </ModalFooter>
            </Rodal>

        </Fragment>
    );
}
export default PatronRegistrado;