import React, { Fragment } from "react";
import { FormGroup, Label, CustomInput } from "reactstrap";
import Preview from "../../../../../Cintas/Preview";

export default class WizardStep2 extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="form-wizard-content">
          <Preview/>
        </div>
      </Fragment>
    );
  }
}
