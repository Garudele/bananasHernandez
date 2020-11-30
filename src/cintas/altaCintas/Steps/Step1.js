import React, { Fragment } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
import Cintas from '../../../../../Cintas/Cintas';
import CintasOrdenadas from '../../../../../Cintas/CintasOrdenadas';
import { connect } from 'react-redux';
import cintas from "../../../../../../controllers/cintas";



const WizardStep1 =({orden})=>{
 
  return (
    <Fragment>
        <div className="form-wizard-content">
                {orden.length ===10  ? (
                 <CintasOrdenadas/>
                ):(<Cintas/>)

                }     
     
      </div>
    </Fragment>
  );
}


const mapStateToProps = (state) => ({
   orden:state.reducerCinta.cinta,
})

const mapDispatchToProps = (dispatch) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(WizardStep1)
