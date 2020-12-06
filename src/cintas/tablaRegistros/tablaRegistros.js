import React, { Fragment, useState} from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
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
} from "reactstrap";
import Rodal from "rodal";

import SweetAlert from "sweetalert-react";
import BootstrapTable from "react-bootstrap-table-next";
import Cintas from "../../controllers/cintas";
import FormGrid from "../../cintas/altaRegistros/altaRegistros";
import Axios from "axios";
import Swal from 'sweetalert2';
const GridTables = (props) => {

const [sweetEditar, setSweetEditar] = useState(false);
const [sweetCantidad, setSweetCantidad] = useState(false);

const [res,setRes]=useState(false);
const [registros, setRegistros]=useState([
  {
    numero_semana: "",
    nombre_finca:"",
    cantidad: "",
    color: "",
    anio: "",
    fecha_registro:"",
  }
]);

const [modalEditar,setModalEditar]= useState(false);
const hide =() =>{
  setModalEditar(!modalEditar);
}

const valoresTabla =(data)=>{

  let Arrayregistros=[];
  let contador=0;
  data.forEach(registro => {
        Arrayregistros[contador++]=  {
          id:registro.id,
          numero_semana: registro.numero_semana,
          nombre_finca:registro.nombre_finca,
          cantidad:registro.cantidad,
          codigo:registro.codigo,
          color: registro.color,
          anio: registro.anio,
          fecha_registro:registro.fecha_registro,
         };
  });

  setRegistros(Arrayregistros);
}

Cintas.getDataRegistrosPlantaciones().then((respuesta) => {

  if (!res) {
    setRes(true);    
      valoresTabla(respuesta);
  
  }
});
const [registroSeleccionado, setRegistroSeleccionado]=useState({});

const Editar = (datoSeleccionado)=>{
      setRegistroSeleccionado(datoSeleccionado);
      setModalEditar(!modalEditar);
}

const [datosNuevos,setDatosNuevos] =useState({

    nombre_finca:"",
    cantidad:""
  

});

const actualiza =()=>{
  const baseUrl = "http://bananashernandez.com/controlcintas/APICintas/plantaciones.php"; 
    let f= new FormData();

    f.append("id", registroSeleccionado.id);
    f.append("nombre_finca", datosNuevos.nombre_finca);
    f.append("cantidad", datosNuevos.cantidad);
    f.append("METHOD","PUT");

    if(!datosNuevos.cantidad){
      setSweetCantidad(!sweetCantidad)
    }
    else{
      Axios.post(baseUrl,f).then((respuesta)=>{
        setModalEditar(!modalEditar);
        valoresTabla(respuesta.data);
        setSweetEditar(!sweetEditar)
     });
    }   
}

const alertDelete=(dato)=>{
  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Está seguro de eliminar este registro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar!',
      cancelButtonText: 'Cancelar!',
      reverseButtons: true

    }).then((result) => {
      if (result.isConfirmed) {
        const baseUrl = "http://localhost/BananasHernandez/cintas/plantaciones.php"; 
        let f= new FormData();
        f.append("id", dato.id);
        f.append("METHOD","ELIMINAR")  
      
        Axios.post(baseUrl,f).then((respuesta)=>{    
          swalWithBootstrapButtons.fire(
            'Registro eliminado!',
          )    
          valoresTabla(respuesta.data);
               
        });                     
 
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El registro de plantación no fue eliminado.'
        )
      }
    })
}

const columns = [
  {
    dataField: "numero_semana",
    text: "Semana",
    sort: true,
    align: "center",
  },
  {
    dataField: "nombre_finca",
    text: "Finca",
    sort: true,
    align: "center",
  },
  {
    dataField: "cantidad",
    text: "Cantidad",
    sort: true,
    align: "center",
  },
  {
    dataField: "color",
    text: "Color de cinta asignada",
    sort: true,
    align: "center",
  },
  {
    dataField: "anio",
    text: "Año",
    sort: true,
    align: "center",
  },
  {
    dataField: "fecha_registro",
    text: "Fecha",
    sort: true,
    align: "center",
  },

  {
    dataField: "actions",
    isDummyField: true,
    align: "center",
    text: "Opciones",
    formatter: (cellContent, row) => {
      return (
        <div>         
          <div className="d-block w-100 text-center">
            <UncontrolledButtonDropdown>
              <DropdownToggle caret className="btn-icon btn-icon-only btn btn-link" color="link">
                <i className="lnr-menu-circle btn-icon-wrapper" />
              </DropdownToggle>
              <DropdownMenu right className="rm-pointers dropdown-menu-hover-link">
                <DropdownItem onClick={()=>{Editar(row)}}  >
                  <i className="dropdown-icon lnr-cog "> </i>
                  <span style={{color:"blue" }} >Editar</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={()=>{alertDelete(row)}} > 
                <i className="dropdown-icon lnr-trash  "> </i>
                  <span style={{color:"red" }} >Eliminar</span>
                </DropdownItem>                                
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "name",
    order: "desc",
  },
];

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
        <Row>
          <Col md="12">
            {res===true ? (
              <Card className="main-card mb-3">
              <CardBody>
                <div className="table-responsive">
                  <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={registros}
                    columns={columns}
                    defaultSorted={defaultSorted}
                  />
                </div>
              </CardBody>
            </Card>
            ):(
              <h1>Cargando...</h1>
            )

            }
          </Col>
        </Row>


        <Rodal width="700" visible={modalEditar} onClose={hide}  animation="rotate" showMask={false}>
            <ModalHeader>Editar registro</ModalHeader>
            <ModalBody>           
              <FormGrid editar={modalEditar} registro={registroSeleccionado} setDatosNuevos={setDatosNuevos} datosNuevos={datosNuevos} />
            </ModalBody>
            <ModalFooter>
              <Button color="link" onClick={hide}>
                Cancelar
              </Button>
              <Button color="primary" onClick={actualiza}>
                Actualizar
              </Button>
              <SweetAlert title="Registro editado correctamente" confirmButtonColor="" show={sweetEditar}
                          text="" type="success" onConfirm={() => { setSweetEditar(!sweetEditar) }} />
                          <SweetAlert title="Inserte una cantidad para continuar" confirmButtonColor="" show={sweetCantidad}
                          text="" type="error" onConfirm={() => { setSweetCantidad(!sweetCantidad) }} />
            </ModalFooter>
          </Rodal>
         

      </CSSTransitionGroup>
    </Fragment>
  );
};

export default GridTables;
