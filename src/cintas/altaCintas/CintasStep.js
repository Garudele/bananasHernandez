import React ,{useState} from 'react'
import { Button, Col, Row, Table } from "reactstrap"
import { connect } from 'react-redux'
import { IoIosPricetags} from "react-icons/io";
import LaddaButton, {ZOOM_IN,} from "react-ladda";
import moment from "moment";

const x = 7;
const z = 5;
let anio = moment().year();


const CintasStep= ({limpiar, cinta }) =>{
 
 return(
  <div >
    <h1 style={{ fontWeight: "bold", textAlign: "center" }} >Patrón de cintas de colores {anio}</h1>
    <Row  >
      {cinta.map((cinta, i) => (
        <Col  md={1} key={cinta.id} className='p-0'>

          {cinta.color === 'Blanca' ? (
            <div className="font-icon-wrapper font-icon-lg">

              <IoIosPricetags key={i} id="sopa" fontSize="40px" color="white" style={{ background: "black", borderRadius: "10%", padding: 5 }} /> <br />
              <span style={{ color: "#5863FF", fontWeight: "bold" }}>{cinta.color}</span>

            </div>


          ) : cinta.color === 'Amarilla' ? (
            <div className="font-icon-wrapper font-icon-lg">
              <IoIosPricetags key={i} id="shainy" fontSize="40px" color={cinta.codigo} style={{ background: "black", borderRadius: "10%", padding: 5 }} /><br />
              <span style={{ color: "#5863FF", fontWeight: "bold" }}>{cinta.color}</span>
            </div>
          ):(
              <div className="font-icon-wrapper font-icon-lg">
                <IoIosPricetags key={i} id="rosa" fontSize="40px" color={cinta.codigo} style={{ background: "#CED3D5", borderRadius: "10%", padding: 5 }} /><br />
                <span style={{ color: "#5863FF", fontWeight: "bold" }}>{cinta.color}</span>
              </div>
            )
          }
        </Col>
      ))}     
    </Row>
   
  </div>
)}
const mapStateToProps = (state) => ({
  cinta: state.reducerCinta.cinta,
  
})

const mapDispatchToProps = (dispatch) => ({

  limpiar(cintas) {
    dispatch({
      type: 'LIMPIAR',
      cintas
    })
  }


})
export default connect(mapStateToProps, mapDispatchToProps)(CintasStep)
