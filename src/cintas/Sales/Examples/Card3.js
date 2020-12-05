import React, {useState } from "react";
import {IoIosCut } from "react-icons/io";
import {
  CardHeader,
  Card,
  CardBody,
  Table
} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import CountUp from "react-countup";
import { IoIosPricetags } from "react-icons/io";
import moment from "moment";
import Cintas from "../../../controllers/cintas"


const Card3 = () => {

  let num = moment().weeks();
  const [registro, setRegistro] = useState([]);
  const [resRegistro, setResRegistro] = useState(false);

  Cintas.getDataRegistrosPlantaciones().then((Response) => {
    if (!resRegistro) {
      setResRegistro(true)
      setRegistro(Response)
    }
  });

  return (
    <Card className="mb-3">
      {resRegistro===true ? (
        <div>
          
      <CardHeader className="card-header-tab">
        <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
          <IoIosCut fontSize="50px" color="blue" />
          <h5 style={{ textAlign: "center", color: "blue" }} > Cosecha semana proxima</h5>
        </div>
      </CardHeader>
      {registro.id ? (
          <span>Plantaciones realizadas en la semana {num - 11} listas para corte</span>
        ):(
          <span></span>
        )

        }
      <CardBody className="pt-2 pb-0">
      
        <div className="scroll-area-md shadow-overflow">
          <PerfectScrollbar>
            <Table className="text-center">
              <thead>
                <tr>
                  <th>Cinta</th>
                  <th>Predio</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {registro.map((elemento, i) => {
                  if (parseInt(elemento.numero_semana) + 11 === num) {
                    return (
                      <tr>
                        <td>
                          <div className="widget-content-left mr-3">
                            <div className="icon-wrapper m-0">
                              <div className="progress-circle-wrapper">
                                {elemento.color === 'Blanca' ? (
                                  <IoIosPricetags key={i} id="sopa" fontSize="40px" color="white" style={{ background: "black", borderRadius: "10%", padding: 5, marginLeft: 5 }} />
                                ) : elemento.color === 'Amarilla' ? (
                                  <IoIosPricetags key={i} id="shainy" fontSize="40px" color={elemento.codigo} style={{ background: "black", borderRadius: "10%", padding: 5, marginLeft: 5 }} />
                                ) : (<IoIosPricetags key={i} id="rosa" fontSize="40px" color={elemento.codigo} style={{ background: "#CED3D5", borderRadius: "10%", padding: 5, marginLeft: 5 }} />
                                    )
                                }
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="widget-content-left">
                            <div className="widget-heading">
                              <h3>{elemento.nombre_finca}</h3>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="widget-content-right">
                            <div className="fsize-1 text-focus">

                              <CountUp style={{ fontSize: "30px" }} start={0} end={elemento.cantidad} separator="" decimals={0}
                                decimal="." prefix="" duration="10" />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </Table>
          </PerfectScrollbar>
        </div>
      </CardBody>
        </div>
      ):(
        <h1>Cargando...</h1>
      )

      }
    </Card>
  )
}

export default Card3;