import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {
  Row,
  Col,
} from "reactstrap";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

export default class SalesDashboard1 extends Component {
  
  render() {   

    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <div>
            <Row>
              <Col lg="6" xl="4">
               <Card1/>
              </Col>
              <Col lg="6" xl="4">
                <Card2/>
              </Col>
              <Col lg="12" xl="4">
              <Card3/>
              </Col>
            </Row>      
          </div>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
