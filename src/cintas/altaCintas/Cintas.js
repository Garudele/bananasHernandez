import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from "reactstrap";
import { IoIosPricetags } from "react-icons/io";

const Cintas = ({ cintas, agregarCinta }) => {

  return (
    <div>
      <h1 style={{ fontWeight: "bold", textAlign: "center" }} >Ordenar cintas</h1>
      <div className="divider"></div>
      <Row>
      <Col >
        {cintas.map((cinta, i) => (        

            <div >
              {cinta.color === 'Blanca' ? (
                <div id={cinta.color} onClick={() => agregarCinta(cinta)} className="font-icon-wrapper font-icon-lg">
                  <IoIosPricetags key={i} id="sopa" fontSize="40px" color="white" style={{ background: "black", borderRadius: "10%", padding: 5, marginLeft: 5 }} /> <br />
                  <span style={{ color: "#5863FF", fontWeight: "bold" }}>{cinta.color}</span>
                </div>
              ) : cinta.color === 'Amarilla' ? (
                <div id={cinta.color} onClick={() => agregarCinta(cinta)} className="font-icon-wrapper font-icon-lg">
                  <IoIosPricetags key={i} id="shainy" fontSize="40px" color={cinta.codigo} style={{ background: "black", borderRadius: "10%", padding: 5, marginLeft: 5 }} /><br />
                  <span style={{ color: "#5863FF", fontWeight: "bold" }}>{cinta.color}</span>
                </div>
              ) : (<div id={cinta.color} onClick={() => agregarCinta(cinta)} className="font-icon-wrapper font-icon-lg">
                <IoIosPricetags key={i} id="rosa" fontSize="40px" color={cinta.codigo} style={{ background: "#CED3D5", borderRadius: "10%", padding: 5, marginLeft: 5 }} /><br />
                <span style={{ color: "#5863FF", fontWeight: "bold" }}>{cinta.color}</span>
              </div>
                  )}
            </div>
        
        ))}
          </Col>
      </Row>
    </div>
  )
}
const mapStateToProps = (state) => ({
  cintas: state.reducerCinta.cintas
})

const mapDispatchToProps = (dispatch) => ({
  agregarCinta(cinta) {
    dispatch({
      type: 'CINTA_ORDENADA',
      cinta
    })
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(Cintas)
