import React, { Fragment, useState } from "react";
import { Button } from "reactstrap";
import {connect} from "react-redux";
import Axios from "axios";
import SweetAlert from "sweetalert-react";
import CintasStep from "../CintasStep";

const WizardStep4 = ({cinta, limpiar}) => {  
  let semanas=[];

  if(cinta.length===10){
    let contador=0;
    
    for(let x=0;x<52;x++){
        if(contador===10) contador=0;
        semanas[x]= cinta[contador++];
    }
  }
  
  const [sweet,setSweet]=useState(false);
  const [sweetInfo,setSweetInfo]=useState(false);
  const [sweetSalir,setSweetSalir]= useState(false);
  const  insertar = () =>{

    const baseUrl = "http://bananashernandez.com/controlcintas/APICintas/semanaCinta.php"; 
    let f= new FormData();
      let semanasn= JSON.stringify(semanas)      
      f.append('semanas', semanasn); 
      f.append('METHOD','POST');    
      
      if(semanas<10){
        setSweetInfo(!sweetInfo)

      }
      else{
        Axios.post(baseUrl,f).then((respuesta)=>{
          setSweet(!sweet)
          window.location = '/controlcintas/altaCintas';
    })    
      }     
  
  };

  const salir =()=>{
      setSweetSalir(!sweetSalir);
      limpiar(cinta);
  }

  return (  <Fragment>
    <div className="form-wizard-content">
      <div className="no-results">
       <CintasStep />
        <div className="mt-3 mb-3" />
        <div className="text-center">
          <Button onClick={insertar} color="success" size="lg" className="btn-shadow btn-wide">
            Guardar
          </Button >
          <Button style={{marginLeft:"5px"}} onClick={salir} color="danger" size="lg" className="btn-shadow btn-wide">
           Cancelar
          </Button >

          <SweetAlert title="El patrón de cintas se a guardado correctamente!" confirmButtonColor="" show={sweet}
                     type="success" onConfirm={()=>{setSweet(!sweet)}} />
        
        <SweetAlert title="El patrón no se guardo!" confirmButtonColor="" show={sweetSalir}
                     type="error" onConfirm={()=>{setSweetSalir(!sweetSalir)}} />
        
        <SweetAlert title="Completar el patrón de cintas para poder continuar!" confirmButtonColor="" show={sweetInfo}
                     type="error" onConfirm={()=>{setSweetInfo(!sweetInfo)}} />
            
        </div>
      </div>
    </div>
  </Fragment>
)
}



const mapStateToProps = (state) => ({
 
  cinta: state.reducerCinta.cinta,
})

const mapDispatchToProps = (dispatch) => ({

  limpiar(cintas) {
    dispatch({
      type: 'LIMPIAR',
      cintas
    })
  }


})
export default connect(mapStateToProps, mapDispatchToProps)(WizardStep4)

