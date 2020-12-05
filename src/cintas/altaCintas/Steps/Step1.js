import React, { Fragment } from "react";
import Cintas from '../Cintas';
import CintasOrdenadas from '../CintasOrdenadas';
import { connect } from 'react-redux';


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
