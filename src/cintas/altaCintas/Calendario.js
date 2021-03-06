import React from "react";
import {
  Container,
  Col,
  Row,
  Table,
  Card,
  CardTitle,
  CardBody,
} from "reactstrap";
import { connect } from "react-redux";
import moment from "moment";
import Cintas from "../../controllers/cintas";

const format = (cinta, setData, setContenido) => {
  let params = [];

  let contenido = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  for (let i = 0; i < 10; i++) {
    contenido[i] = cinta[i];
  }

  let tamanio = cinta.length;

  for (let i = 0; i < tamanio; i++) {
    contenido[i] = cinta[i];
    contenido[i + 10] = cinta[i];
  }

  for (let i = 1; i <= 10; i++) {
    let filas = [];
    let aumento = i + 10;

    for (let j = 1; j <= 21; j++) {
      if (j == 1) {
        filas[j] = i;
      } else if (j > 1 && j < 7) {
        if (aumento <= 52) {
          filas[j] = aumento;
          aumento += 10;
        } else {
          filas[j] = "";
        }
      } else if (j == 7) {
        filas[j] = contenido[i + 9];
      } else {
        filas[j] = {};
      }
    }

    params[i] = filas;
  }
  setData(params);
  setContenido(contenido);
};

const Preview = ({ cinta }) => {
  let anioActual = moment().year();
  const [data, setData] = React.useState([]);
  const [res, setRes] = React.useState(false);
  const [contenido, setContenido] = React.useState([]);

  Cintas.getDataColor().then((Response) => {
    if (!res) {
      Response.forEach((element) => {
        if (element.anio == anioActual) {
          format(Response, setData, setContenido);
          setRes(true);
        }
      });
    }
  });

  return (
    <Container fluid>
      <Row>
        <Col>
          <Card className="main-card mb-3">
            <CardTitle className="text-center mt-3 mb-0">
              <h1>Calendario {anioActual}</h1>
            </CardTitle>

            <CardBody>
              <Table bordered>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>13</th>
                    <th>14</th>
                    <th>15</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>7</td>
                    <td>14</td>
                    <td>21</td>
                    <td>28</td>
                    <td>35</td>
                    <td>42</td>
                    <td>49</td>
                    <td>56</td>
                    <td>63</td>
                    <td>70</td>
                    <td>77</td>
                    <td>84</td>
                    <td>91</td>
                    <td>98</td>
                    <td>105</td>
                  </tr>
                  {data.map((fila, i) => {
                    let cont = 0;
                    let cont2 = 9;
                    let contPrueba = i - 1;
                    return (
                      <tr key={i}>
                        {fila.map((campo, i) => {
                          if (i < 7) {
                            return <td key={i}>{JSON.stringify(campo)}</td>;
                           
                          } else if (i == 7) {
                            if (campo) {
                              return (
                                <td
                                  key={i}
                                  style={{ background: campo.codigo }}
                                >
                                   {campo.color==="Amarilla" ? (<spam style={{ fontWeight: "bold", color:"black"}}>{campo.color }</spam>)
                      : campo.color==="Blanca"?(<spam style={{ fontWeight: "bold", color:"black"}}>{campo.color }</spam>)
                      :(<spam style={{ fontWeight: "bold", color:"white"}}>{campo.color }</spam>)
                      }
                                </td>
                              );
                            } else return <td key={i}></td>;
                          } else if (i == 8) {
                            let arrayColors = [];

                            for (let x = cont; x < 14; x++) {
                              arrayColors[x] = contenido[cont2 + contPrueba];

                              if (cont >= 10) cont = 0;
                              if (cont2 == 0) cont2 = 10;
                              cont++;
                              cont2--;
                            }

                            return (
                              <React.Fragment key={i}>
                                {arrayColors.map((item, i) => {
                                  if (item)
                                    return (
                                      <td
                                        key={i}
                                        style={{ background: item.codigo }}
                                      >
                                        {" "}
                                      </td>
                                    );
                                  else return <td key={i}> </td>;
                                })}
                              </React.Fragment>
                            );
                          }
                        })}
                        {() => {
                          cont++;
                        }}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cinta: state.reducerCinta.cinta,
  cintas: state.reducerCinta.cintas,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Preview);
