import React, { Fragment } from "react";
import { Alert, Button } from "reactstrap";
import {connect} from "react-redux";
import Axios from "axios";

const WizardStep4 = ({cinta}) => {

  
  let semanas=[];

  if(cinta.length==10){
    let contador=0;
    
    for(let x=0;x<52;x++){
        if(contador==10) contador=0;
        semanas[x]= cinta[contador++];
    }

  }
  console.log(cinta)


  const  insertar = () =>{

    const baseUrl = "http://localhost/BananasHernandez/cintas/"; 
    let f= new FormData();
      let semanasn= JSON.stringify(semanas)
      f.append('semanas', semanasn); 
      f.append('METHOD','POST');    
         
    Axios.post(baseUrl,f).then((respuesta)=>{

      })    
  }

  return (  <Fragment>
    <div className="form-wizard-content">
      <div className="no-results">
        <div className="sa-icon sa-success animate">
          <span className="sa-line sa-tip animateSuccessTip" />
          <span className="sa-line sa-long animateSuccessLong" />
          <div className="sa-placeholder" />
          <div className="sa-fix" />
        </div>
        <div className="results-subtitle mt-4">Hecho!</div>
        <div className="results-title">
          El patrón de cintas se ha guadado exitosamente!
        </div>
        <div className="mt-3 mb-3" />
        <div className="text-center">
          <Button onClick={insertar} color="success" size="lg" className="btn-shadow btn-wide">
            Finish
          </Button >
        </div>
      </div>
    </div>
  </Fragment>
)
}




const mapStateToProps = (state) => ({
  cinta: state.reducerCinta.cinta

})

const mapDispatchToProps = (dispatch) => ({
  
})
export default connect(mapStateToProps, mapDispatchToProps)(WizardStep4)

