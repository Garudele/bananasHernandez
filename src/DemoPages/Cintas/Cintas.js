

import { Button, Col, Row } from "reactstrap";
import React, { useState } from 'react';
import { connect } from 'react-redux';
// import controlCintas from '../../controllers/cintas';

const Cintas = ({ cintas, agregarCinta }) => {
//   const [data, setData] = useState([])
//   const [res, setRes] = useState(false)

//   controlCintas.getData().then((respuesta) => {
//     if (!res) {
//       setRes(true)
//       setData(respuesta)
//       getDataInitial(respuesta)
//     }
//   });  

  return (
    <div>
      <h1>Ordenar Cintas</h1>
      <Row>
        {cintas.map((cinta) => (
          <Col md={1} key={cinta.id}>
            {cinta.color === 'Blanca' ? (
              <Button
                className="btn-sm"
                onClick={() => agregarCinta(cinta)}
                style={{ background: cinta.codigo, color: 'black', border: '2px solid black' }}>
                {cinta.color}
              </Button>
            ) : cinta.color === 'Amarilla' ? (
              <Button
                className="btn-sm"
                onClick={() => agregarCinta(cinta)}
                style={{ background: cinta.codigo, color: 'black', border: '2px solid black' }}>
                {cinta.color}
              </Button>
            ) : (
              <Button
                className="btn-sm"
                onClick={() => agregarCinta(cinta)}
                style={{ background: cinta.codigo, border: `2px solid black` }}>
                {cinta.color}
              </Button>
            )}
          </Col>
         
        ))}
  
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
  // getDataInitial(respuesta) {
  //   dispatch({
  //     type: 'CARGAR',
  //     respuesta
  //   })
  // }
  
})
export default connect(mapStateToProps, mapDispatchToProps)(Cintas)
