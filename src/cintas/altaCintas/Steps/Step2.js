import React, { Fragment } from "react";
import Preview from "../Preview";

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
