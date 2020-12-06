import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Card, CardBody, Row, Col } from "reactstrap";
import MultiStep from "./index";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step4 from "./Steps/Step4";
import moment from 'moment';
import Cintas from "../../controllers/cintas";
import PatronRegistrado from "../patronRegistrado"

const steps = [
  { name: "Alta de cintas", component: <Step1 /> },
  { name: "Vista previa", component: <Step2 /> },
  { name: "Hecho", component: <Step4 /> },
];

let anioActual = moment().year();

const AltaCintas = () => {

  const [inicio, setInicio] = React.useState(false);
  const [res, setRes] = React.useState(false);

  Cintas.getDataColor().then((Response) => {
    if (!res) {
      Response.forEach(element => {
      
        if (parseInt(element.anio) === anioActual) {
          setInicio(true)         
        }        
      });
      setRes(true)
    }
  });


  return (
    <Fragment>
      <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
        transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
        <div>
          <Row>
            <Col md="12">
              <Card className="main-card mb-3">
                <CardBody>
                 {res===true?(
                    <div className="forms-wizard-vertical">
                    {inicio ? (
                      <PatronRegistrado />
                    ) : (
                        <MultiStep showNavigation={true} steps={steps} />
                      )
                    }
                  </div>
                 ):(
                   <h1>Cargando...</h1>
                 )

                 }
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </CSSTransitionGroup>
    </Fragment>
  );
};

export default AltaCintas;

