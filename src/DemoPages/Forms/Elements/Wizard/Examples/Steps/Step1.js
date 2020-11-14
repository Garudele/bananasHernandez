import React, { Fragment } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
import Cintas from '../../../../../Cintas/Cintas';
import CintasOrdenadas from '../../../../../Cintas/CintasOrdenadas';
export default class WizardStep1 extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="form-wizard-content">
          <Cintas/>
          <CintasOrdenadas/>
        </div>
      </Fragment>
    );
  }
}
