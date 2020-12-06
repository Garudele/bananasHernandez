import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

// Examples
import CommerceDashboard1 from "./Examples/Variation1";

export default class CommerceDashboard extends Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
             <CommerceDashboard1 />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
