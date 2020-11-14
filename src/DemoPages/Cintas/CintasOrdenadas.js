import React from 'react'
import { Button, Col, Row, Table } from "reactstrap"
import { connect } from 'react-redux'

const x=7;
const z=5;
const CintasOrdenadas = ({ cintasOrdenadas, regresarCinta, limpiar,cintas}) => (
  <div>
    <h1>Cintas Ordenadas</h1>

    
    <Row>
      {cintasOrdenadas.map((cinta) => (
        <Col md={1} key={cinta.id} className='p-0'>
          
          {cinta.color === 'Blanca'? (
            <Button
              className="btn-sm btn-block"
              onClick={() => regresarCinta(cinta)}
              style={{ background: cinta.codigo, color: 'black', border: '2px solid black', height:30}}>
             
            </Button>
          ) : cinta.color === 'Amarilla' ? (
            <Button
            className="btn-sm btn-block"
            onClick={() => regresarCinta(cinta)}
            style={{ background: cinta.codigo, color: 'black', border: '2px solid black', height:30}}>
           
          </Button>
          )
          : (
            <Button
              className="btn-sm btn-block"
              onClick={() => regresarCinta(cinta)}
              style={{ background: cinta.codigo, border: `2px solid black`, height:30}}>
             
            </Button>
          )

         
          }          
        </Col>
      
      ))}

      <Col> <Col> { <Button    className="btn-sm " 
            onClick={() => limpiar(cintasOrdenadas)} >Limpiar orden</Button>}</Col></Col>
         
      
    </Row>
    <Row>
      


    </Row>

        
        
  </div>
)

const mapStateToProps = (state) => ({
  cintasOrdenadas: state.reducerCinta.cintasOrdenadas, 
  cintas:state.reducerCinta.cintas
})

const mapDispatchToProps = (dispatch) => ({
  regresarCinta(cinta) {
    dispatch({
      type: 'REGRESAR_CINTA',
      cinta
    })
  },

  limpiar(cintas){
    dispatch({
      type:'LIMPIAR',
      cintas
    })
  }

 
})
export default connect(mapStateToProps, mapDispatchToProps)(CintasOrdenadas)
