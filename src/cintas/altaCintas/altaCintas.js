import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Card, CardBody, Row, Col } from "reactstrap";

import MultiStep from "./index";

import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step4 from "./Steps/Step4";


const steps = [
  { name: "Alta de cintas", component: <Step1 /> },
  { name: "Vista previa", component: <Step2 /> },
  { name: "Hecho", component: <Step4 /> },
];

export default class FormWizardVar3 extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <div>           
            <Row>
              <Col md="12">
                <Card className="main-card mb-3">
                  <CardBody>
                    <div className="forms-wizard-vertical">
                      <MultiStep showNavigation={true} steps={steps} />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
