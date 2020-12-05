import React, { Component, Fragment } from "react";
import SalesDashboard1 from "./Examples/Variation1";


export default class SalesDashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className="divider"/>
        <div className="app-inner-layout">          
          <SalesDashboard1/>
        </div>
      </Fragment>
    );
  }
}
