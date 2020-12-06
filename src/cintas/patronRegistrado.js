import React, { useState, Fragment} from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Alert,
} from "reactstrap";
import SweetAlert from "sweetalert-react";
import Cintas from "../controllers/cintas";
import moment from "moment";
import Axios from "axios";
import Swal from 'sweetalert2';

const PatronRegistrado = () => {

    const [sweetElim,setSweetElim]=useState(false);    
    const [res,setRes]=useState(false);
    const [consulta,setConsulta]=useState(false);
    let anioActual = moment().year();

    Cintas.getDataRegistrosPlantaciones().then((Response) => {

        if (!res) {
            Response.forEach(element => {
              if (element.anio === anioActual) {
                setConsulta(true)
                setRes(true)
              }
            });
          }
      });


      const alertDelete=()=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Está seguro de eliminar el patrón de cintas de este año?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true

          }).then((result) => {
            if (result.isConfirmed) {

                            
        const baseUrl = "http://bananashernandez.com/controlcintas/APICintas/semanaCinta.php"; 
        let f= new FormData();
        f.append("anio", anioActual);
        f.append("METHOD","ELIMINAR_PATRON")  
      
        if(consulta){
            setSweetElim(!sweetElim);
        }
        else{
            Axios.post(baseUrl,f).then((respuesta)=>{  
                
             
                swalWithBootstrapButtons.fire(
                    'Registro eliminado!',
                    'Inserte el patrón de cintas nuevamente'
                  )          
                 window.location = '/controlcintas/altaCintas';
            });
        }

            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'El patrón de cintas no fue eliminado.'
              )
            }
          })
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
                                    <Button onClick={alertDelete} className="mb-2 mr-2" color="success">
                                        Eliminar
                                    </Button>
                                </p>
                            </Alert>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

          
            <SweetAlert title="No se puede eliminar el patrón de cintas, ya cuenta con registros en plantaciones" confirmButtonColor="" show={sweetElim}
                        text="" type="error" onConfirm={() => { setSweetElim(!sweetElim)}} />
        </Fragment>
    );
}
export default PatronRegistrado;