import React  from 'react'
import { Button, Col, Row, } from "reactstrap"
import { connect } from 'react-redux'
import { IoIosPricetags} from "react-icons/io";



const CintasOrdenadas = ({limpiar, cinta }) =>{
 
 return(
  <div>
    <h1 style={{ fontWeight: "bold", textAlign: "center" }} >Cintas ordenadas</h1>
    <Row>
    <Col>
      {cinta.map((cinta, i) => (
       
          <div>
            
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
          </div>
       
      ))}  
       </Col>   
    </Row>
    <Row>
    <Col style={{textAlign:"center"}}> 
    <Button  onClick={() => limpiar(cinta)} outline className="mb-2 mr-2 btn-dashed" color="primary">
      Limpiar orden
     </Button> 
      </Col>
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
export default connect(mapStateToProps, mapDispatchToProps)(CintasOrdenadas)
